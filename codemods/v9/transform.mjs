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
 * - Rewrites `src/12/` and `src/16/` imports and re-exports
 *   (`export … from`) to their `src/` equivalent.
 * - Flags rewritten 12px imports with a TODO comment: the new icon is 20px, so
 *   its size has to be set explicitly.
 * - Merges stroke/fill pairs that collapse into a single v9 file into one
 *   import. The import that already points at the v9 file wins, and only real
 *   references to the dropped binding are renamed (scope-aware). When a merge
 *   is unsafe (more than one specifier, a default import mixed with an SVGR
 *   `ReactComponent` import, a namespace import, a shadowed name, or the
 *   dropped name used in a shorthand property or an `export { … }` list), both
 *   imports are rewritten to the v9 file and flagged with a TODO comment.
 * - Flags imports with no v9 equivalent with a TODO comment and lists them in
 *   the report; the import path is left unchanged.
 * - Reports non-import references (string and template literals, `require()`,
 *   `import()`, sprite IDs) without touching them.
 *
 * Non-goals:
 * - It does not rename local identifiers (`SearchIcon` stays `SearchIcon`),
 *   except to merge collapsed stroke/fill imports.
 * - It does not edit `package.json`.
 * - It does not process `.mdx` or CSS files. PostCSS `svg-load('16/…')` calls
 *   have to be migrated by hand with the same map.
 * - It does not set sizes.
 *
 * Unmapped imports are expected during rollout: the import path is left
 * unchanged, the import gets a TODO comment and a report line, and the exit
 * code stays 0.
 *
 * jscodeshift runs files in parallel worker processes, so each worker prints
 * its own report for the files it processed.
 */
import { dirname, join } from 'node:path';
import { readFileSync, writeSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

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
const TODO_NO_EQUIVALENT =
  ' TODO(svg-icons v9): no equivalent in the new icon set. Migrate this import manually.';
const TODO_MERGE =
  ' TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.';

const SOURCE_DECLARATIONS = ['ImportDeclaration', 'ExportNamedDeclaration', 'ExportAllDeclaration'];
const KEYED_TYPES = new Set([
  'ClassAccessorProperty',
  'ClassMethod',
  'ClassPrivateMethod',
  'ClassProperty',
  'MethodDefinition',
  'ObjectMethod',
  'ObjectProperty',
  'Property',
  'PropertyDefinition',
  'TSAbstractMethodDefinition',
  'TSAbstractPropertyDefinition',
  'TSDeclareMethod',
  'TSMethodSignature',
  'TSPropertySignature'
]);
const NON_REFERENCE_PARENTS = new Set([
  'BreakStatement',
  'ContinueStatement',
  'ImportDefaultSpecifier',
  'ImportNamespaceSpecifier',
  'ImportSpecifier',
  'JSXAttribute',
  'JSXNamespacedName',
  'LabeledStatement'
]);

/** Per-worker report, aggregated across the files this worker processes. */
const report = {
  filesChanged: new Set(),
  rewritten: 0,
  hits16: 0,
  flagged12: [], // [{ file, source }]
  merges: [], // [{ file, source }]
  unmerged: [], // [{ file, source }]
  noEquivalent: [], // [{ file, source }]
  nonImportRefs: [] // [{ file, line, reference }]
};

/** Append a line comment above `node`, once. */
function addTodo(j, node, text) {
  if ((node.comments ?? []).some(comment => comment.value === text)) return;

  node.comments = [...(node.comments ?? []), j.commentLine(text, true, false)];
}

/** Local identifier of an icon import: default import or SVGR `ReactComponent as X`. */
function localNameOf(importNode) {
  const specifier = (importNode.specifiers ?? [])[0];
  return specifier?.local?.name ?? null;
}

/**
 * What an import binds, for example `value:default` or `value:ReactComponent`.
 * `null` for imports a merge can't fold together: anything but exactly one
 * default or named specifier.
 */
function importFormOf(importNode) {
  const specifiers = importNode.specifiers ?? [];

  if (specifiers.length !== 1) return null;

  const [specifier] = specifiers;
  const kind = specifier.importKind === 'type' ? 'type' : (importNode.importKind ?? 'value');

  if (specifier.type === 'ImportDefaultSpecifier') return `${kind}:default`;
  if (specifier.type === 'ImportSpecifier') {
    return `${kind}:${specifier.imported.name ?? specifier.imported.value}`;
  }

  return null;
}

/**
 * How an identifier that resolves to an import binding is used:
 * `'reference'`, `'unsafe'` (a rename would change an object key or an export
 * name), or `null` (a property name, key, label, or the import itself).
 */
function usageOf(path) {
  const { node } = path;
  const parent = path.parent.node;

  if (NON_REFERENCE_PARENTS.has(parent.type)) return null;

  switch (parent.type) {
    case 'MemberExpression':
    case 'OptionalMemberExpression':
      return parent.property === node && !parent.computed ? null : 'reference';

    case 'JSXMemberExpression':
      return parent.property === node ? null : 'reference';

    case 'TSQualifiedName':
      return parent.right === node ? null : 'reference';

    case 'TSEnumMember':
      return parent.id === node ? null : 'reference';

    case 'ExportSpecifier':
      return parent.local === node && !path.parent.parent.node.source ? 'unsafe' : null;

    case 'JSXOpeningElement':
    case 'JSXClosingElement':
      // Lowercase JSX names are intrinsic elements, not references.
      return /^[a-z]/u.test(node.name) ? null : 'reference';

    default:
      break;
  }

  if (KEYED_TYPES.has(parent.type) && parent.key === node && !parent.computed) {
    return parent.shorthand ? 'unsafe' : null;
  }

  return 'reference';
}

/**
 * Paths of the references to the module-level `oldName` binding, or `null` if
 * renaming them to `newName` is unsafe: a shorthand property or an export
 * specifier uses `oldName`, or `newName` is shadowed at a reference.
 */
function referencesToRename(root, j, oldName, newName) {
  const programScope = root.find(j.Program).paths()[0].scope;
  const references = [];

  for (const type of [j.Identifier, j.JSXIdentifier]) {
    const paths = root.find(type, { name: oldName }).paths();

    for (const path of paths) {
      if (path.scope.lookup(oldName) !== programScope) continue;

      const usage = usageOf(path);

      if (usage === null) continue;
      if (usage === 'unsafe' || path.scope.lookup(newName) !== programScope) return null;

      references.push(path);
    }
  }

  return references;
}

/** Remove a statement, moving its leading comments (license header, …) to a neighbor. */
function removeStatement(path) {
  const leading = (path.node.comments ?? []).filter(comment => comment.leading);
  const siblings = path.parent.node.body;
  const index = siblings.indexOf(path.node);
  const neighbor = siblings[index + 1] ?? siblings[index - 1];

  if (leading.length && neighbor) {
    neighbor.comments = [...leading, ...(neighbor.comments ?? [])];
  }

  path.prune();
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
      .filter(path => !SOURCE_DECLARATIONS.includes(path.parentPath.node.type))
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

  /** Leave the import path unchanged, attach a TODO comment, and report it. */
  const flagNoEquivalent = (declaration, sourceValue) => {
    addTodo(j, declaration, TODO_NO_EQUIVALENT);
    report.noEquivalent.push({ file: filePath, source: sourceValue });
    changed = true;
    report.filesChanged.add(filePath);
  };

  /** Point the declaration at its v9 file, flagging former 12px icons. */
  const rewrite = (declaration, newSource, is12) => {
    declaration.source.value = newSource;
    report.rewritten += 1;

    if (is12) addTodo(j, declaration, TODO_12PX);
  };

  /**
   * Fold `path` into `existing`, an import of the same v9 file. Returns
   * `false`, changing nothing, when the merge would change behavior.
   */
  const merge = (path, existing) => {
    const form = importFormOf(path.node);

    if (!form || form !== importFormOf(existing.node)) return false;

    const keptName = localNameOf(existing.node);
    const references = referencesToRename(root, j, localNameOf(path.node), keptName);

    if (!references) return false;

    for (const reference of references) {
      reference.node.name = keptName;
    }

    removeStatement(path);

    return true;
  };

  collectNonImportReferences(root, j, filePath);

  const gardenDeclarations = SOURCE_DECLARATIONS.flatMap(type =>
    root
      .find(j[type])
      .filter(path => path.node.source?.value.startsWith(SOURCE_BASE))
      .paths()
  );

  for (const path of gardenDeclarations) {
    const declaration = path.node;
    const sourceValue = declaration.source.value;
    const fromPrefix = fromPrefixOf(sourceValue);

    if (!fromPrefix) {
      // Imports from other size folders (`src/26/`) have no v9 equivalent. Flat
      // `src/` imports are already v9 and are ignored.
      if (/^\d+\//u.test(sourceValue.slice(SOURCE_BASE.length))) {
        flagNoEquivalent(declaration, sourceValue);
      }

      continue;
    }

    const gardenFile = sourceValue.slice(fromPrefix.length);
    const target = MAP[gardenFile];

    if (!target) {
      flagNoEquivalent(declaration, sourceValue);
      continue;
    }

    const newSource = TO_PREFIX + target;
    const is12 = fromPrefix.includes('/12/');

    // Collapse handling: two Garden files can map to the same v9 file
    // (`x-stroke.svg` + `x-fill.svg` → `x.svg`). If the target source is already
    // imported in this file — from an earlier collapsed import or a pre-existing
    // v9 import — merge into that import instead of duplicating it.
    const existing =
      declaration.type === 'ImportDeclaration'
        ? root
            .find(j.ImportDeclaration)
            .filter(candidate => candidate.node.source.value === newSource)
            .paths()[0]
        : undefined;

    if (!existing) {
      rewrite(declaration, newSource, is12);
    } else if (merge(path, existing)) {
      if (is12) addTodo(j, existing.node, TODO_12PX);

      report.merges.push({ file: filePath, source: sourceValue });
    } else {
      rewrite(declaration, newSource, is12);
      addTodo(j, existing.node, TODO_MERGE);
      addTodo(j, declaration, TODO_MERGE);
      report.unmerged.push({ file: filePath, source: sourceValue });
    }

    if (is12) {
      report.flagged12.push({ file: filePath, source: sourceValue });
    } else {
      report.hits16 += 1;
    }

    changed = true;
    report.filesChanged.add(filePath);
  }

  return { code: changed ? root.toSource({ quote: 'single' }) : source, changed };
}

let reportHookRegistered = false;

/** Print the per-worker summary when the jscodeshift worker process exits. */
function registerReportHook() {
  if (reportHookRegistered) return;
  reportHookRegistered = true;

  process.on('exit', () => {
    const {
      filesChanged,
      rewritten,
      hits16,
      flagged12,
      merges,
      unmerged,
      noEquivalent,
      nonImportRefs
    } = report;

    if (
      !filesChanged.size &&
      !flagged12.length &&
      !merges.length &&
      !unmerged.length &&
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
      `  Stroke/fill imports not merged (flagged with a TODO): ${unmerged.length}`,
      ...unmerged.map(({ file, source }) => `    ${file}: ${source}`),
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

    // Synchronous: `console.log` can be cut off at exit when stdout is a pipe.
    writeSync(1, `${lines.join('\n')}\n`);
  });
}

export default function transformer(file, api) {
  registerReportHook();
  return transformSource({ source: file.source, filePath: file.path, j: api.j }).code;
}
