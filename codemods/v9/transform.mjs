/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * `@zendeskgarden/svg-icons` v9 import codemod.
 *
 * Rewrites Garden 12px and 16px icon imports to the flat 20px set introduced in
 * v9, using the generated file-to-file lookup in `codemod-map.json`:
 *
 *   import XIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
 *   →
 *   import XIcon from '@zendeskgarden/svg-icons/src/x.svg';
 *
 * Usage:
 *
 *   npx jscodeshift@17 --no-babel --parser=tsx --extensions=ts,tsx,js,jsx \
 *     -t node_modules/@zendeskgarden/svg-icons/codemods/v9/transform.mjs <paths>
 *
 * `--no-babel` is required: jscodeshift's default babel hook compiles the
 * transform to CommonJS, which breaks when Node loads the `.mjs` file as ESM.
 * With `--no-babel` the worker `require()`s this module natively (require(esm),
 * Node 22+).
 *
 * What it does:
 * - Rewrites `src/12/` and `src/16/` imports to their `src/` equivalent.
 * - Flags rewritten 12px imports with a TODO comment: the new icon is 20px, so
 *   its size has to be set explicitly.
 * - Merges stroke/fill pairs that collapse into a single v9 file into one
 *   import (the first identifier wins; references are renamed).
 * - Reports imports with no v9 equivalent and non-import references (string and
 *   template literals, `require()`, `import()`, sprite IDs) without touching
 *   them.
 *
 * Non-goals:
 * - It does not rename local identifiers (`SearchIcon` stays `SearchIcon`).
 * - It does not edit `package.json`.
 * - It does not process `.mdx` or CSS files. PostCSS `svg-load('16/…')` calls
 *   have to be migrated by hand with the same map.
 * - It does not set sizes.
 *
 * Unmapped imports are expected during rollout: they are left untouched,
 * reported on stdout, and the exit code stays 0.
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const codemodMap = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'codemod-map.json'), 'utf8')
);

const SOURCE_BASE = `${codemodMap.from.package}/src/`;
const FROM_PREFIXES = codemodMap.from.prefixes;
const TO_PREFIX = codemodMap.to.prefix;
const MAP = codemodMap.map;
const SPRITE_ID_PREFIXES = ['zd-svg-icon-12-', 'zd-svg-icon-16-'];
const STRING_TYPES = ['Literal', 'StringLiteral'];

const TODO_12PX =
  ' TODO(svg-icons v9): this was a 12px icon; the new icon is 20px. Set its size explicitly.';

/** Per-worker report, aggregated across the files this worker processes. */
const report = {
  filesChanged: new Set(),
  rewritten: 0,
  hits16: 0,
  flagged12: [], // [{ file, source }]
  merges: [], // [{ file, source }]
  noEquivalent: [], // [{ file, source }]
  nonImportRefs: [] // [{ file, line, reference }]
};

/** Local identifier of an icon import: default import or SVGR `ReactComponent as X`. */
function localNameOf(importNode) {
  const specifier = (importNode.specifiers ?? [])[0];
  return specifier?.local?.name ?? null;
}

/** Rename every reference of `oldName` to `newName` (Identifier + JSXIdentifier). */
function renameReferences(root, j, oldName, newName) {
  if (oldName === newName) return;

  for (const type of [j.Identifier, j.JSXIdentifier]) {
    root
      .find(type)
      .filter(path => path.node.name === oldName)
      .forEach(path => {
        path.node.name = newName;
      });
  }
}

/** The v8 prefix (`src/12/` or `src/16/`) a source starts with, if any. */
function fromPrefixOf(sourceValue) {
  return FROM_PREFIXES.find(prefix => sourceValue.startsWith(prefix)) ?? null;
}

/** True if the string references a v8 icon path or sprite ID. */
function isV8Reference(value) {
  return (
    FROM_PREFIXES.some(prefix => value.includes(prefix)) ||
    SPRITE_ID_PREFIXES.some(prefix => value.includes(prefix))
  );
}

/** Report string and template literals that reference v8 paths or sprite IDs. */
function collectNonImportReferences(root, j, filePath) {
  for (const typeName of STRING_TYPES) {
    const type = j[typeName];

    if (!type) continue;

    root
      .find(type)
      // `Literal` is an ast-types supertype of `StringLiteral`; match the exact
      // node type so a string is never reported twice.
      .filter(path => path.node.type === typeName)
      .filter(path => typeof path.node.value === 'string' && isV8Reference(path.node.value))
      .filter(path => path.parentPath.node.type !== 'ImportDeclaration')
      .forEach(path => {
        report.nonImportRefs.push({
          file: filePath,
          line: path.node.loc?.start.line ?? '?',
          reference: path.node.value
        });
      });
  }

  root
    .find(j.TemplateLiteral)
    .filter(path =>
      path.node.quasis.some(quasi => isV8Reference(quasi.value.cooked ?? quasi.value.raw))
    )
    .forEach(path => {
      report.nonImportRefs.push({
        file: filePath,
        line: path.node.loc?.start.line ?? '?',
        // eslint-disable-next-line no-template-curly-in-string
        reference: path.node.quasis.map(quasi => quasi.value.raw).join('${…}')
      });
    });
}

/**
 * Transform one source string. Exported for the fixture tests; the jscodeshift
 * entry point is the default export below.
 */
export function transformSource({ source, filePath, j }) {
  const root = j(source);
  let changed = false;

  collectNonImportReferences(root, j, filePath);

  const gardenImports = root
    .find(j.ImportDeclaration)
    .filter(path => path.node.source.value.startsWith(SOURCE_BASE));

  gardenImports.forEach(path => {
    const importNode = path.node;
    const sourceValue = importNode.source.value;
    const fromPrefix = fromPrefixOf(sourceValue);

    if (!fromPrefix) {
      // Imports from other size folders (`src/26/`) have no v9 equivalent. Flat
      // `src/` imports are already v9 and are ignored.
      if (/^\d+\//u.test(sourceValue.slice(SOURCE_BASE.length))) {
        report.noEquivalent.push({ file: filePath, source: sourceValue });
      }

      return;
    }

    const gardenFile = sourceValue.slice(fromPrefix.length);
    const target = MAP[gardenFile];

    if (!target) {
      report.noEquivalent.push({ file: filePath, source: sourceValue });
      return;
    }

    const newSource = TO_PREFIX + target;
    const is12 = fromPrefix.includes('/12/');

    // Collapse handling: two Garden files can map to the same v9 file
    // (`x-stroke.svg` + `x-fill.svg` → `x.svg`). If the target source is already
    // imported in this file — from an earlier collapsed import or a pre-existing
    // v9 import — merge instead of duplicating.
    const existing = root
      .find(j.ImportDeclaration)
      .filter(candidate => candidate.node.source.value === newSource)
      .paths()[0];

    if (existing) {
      // Keep the identifier that appears first in source order.
      const existingFirst = existing.node.start < importNode.start;
      const keptPath = existingFirst ? existing : path;
      const removedPath = existingFirst ? path : existing;
      const keptName = localNameOf(keptPath.node);
      const discardedName = localNameOf(removedPath.node);

      if (!existingFirst) {
        // The pre-existing v9 import sits below this one: rewrite this import
        // into the v9 import and drop the later duplicate.
        keptPath.node.source.value = newSource;
      }

      if (keptName && discardedName) {
        renameReferences(root, j, discardedName, keptName);
      }

      j(removedPath).remove();
      report.merges.push({ file: filePath, source: sourceValue });
    } else {
      importNode.source.value = newSource;
      report.rewritten += 1;

      if (is12) {
        importNode.comments = [
          ...(importNode.comments ?? []),
          j.commentLine(TODO_12PX, true, false)
        ];
      }
    }

    if (is12) {
      report.flagged12.push({ file: filePath, source: sourceValue });
    } else {
      report.hits16 += 1;
    }

    changed = true;
    report.filesChanged.add(filePath);
  });

  return { code: changed ? root.toSource({ quote: 'single' }) : source, changed };
}

let reportHookRegistered = false;

/** Print the per-worker summary when the jscodeshift worker process exits. */
function registerReportHook() {
  if (reportHookRegistered) return;
  reportHookRegistered = true;

  process.on('exit', () => {
    const { filesChanged, rewritten, hits16, flagged12, merges, noEquivalent, nonImportRefs } =
      report;

    if (
      !filesChanged.size &&
      !flagged12.length &&
      !merges.length &&
      !noEquivalent.length &&
      !nonImportRefs.length
    ) {
      return;
    }

    const lines = [
      `svg-icons v9 icon codemod (worker ${process.pid}):`,
      `  Files changed: ${filesChanged.size}`,
      `  Imports rewritten: ${rewritten}`,
      `  Stroke/fill imports merged (both now render the same glyph): ${merges.length}`,
      ...merges.map(({ file, source }) => `    ${file}: ${source}`),
      `  12px imports flagged for explicit sizing: ${flagged12.length}`,
      ...flagged12.map(({ file, source }) => `    ${file}: ${source}`)
    ];

    if (hits16 > 0) {
      lines.push(`  Note: ${hits16} 16px import(s) now render at 20px unless a size is set.`);
    }

    lines.push(
      `  No svg-icons equivalent (left untouched): ${noEquivalent.length}`,
      ...noEquivalent.map(({ file, source }) => `    ${file}: ${source}`),
      `  Non-import references (left untouched): ${nonImportRefs.length}`,
      ...nonImportRefs.map(({ file, line, reference }) => `    ${file}:${line}: ${reference}`)
    );

    // eslint-disable-next-line no-console
    console.log(lines.join('\n'));
  });
}

export default function transformer(file, api) {
  registerReportHook();
  return transformSource({ source: file.source, filePath: file.path, j: api.j }).code;
}
