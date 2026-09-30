/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { dirname, join } from 'node:path';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import jscodeshift from 'jscodeshift';
import { test } from 'node:test';
import { transformSource } from './transform.mjs';

const j = jscodeshift.withParser('tsx');
const here = dirname(fileURLToPath(import.meta.url));
const fixturesDir = join(here, '__fixtures__');

for (const caseName of readdirSync(fixturesDir).sort()) {
  test(caseName, () => {
    const inputPath = join(fixturesDir, caseName, 'input.tsx');
    const input = readFileSync(inputPath, 'utf8');
    const expected = readFileSync(join(fixturesDir, caseName, 'expected.tsx'), 'utf8');

    const { code } = transformSource({ source: input, filePath: inputPath, j });

    assert.equal(code.trimEnd(), expected.trimEnd());
  });
}

const codemodMap = JSON.parse(readFileSync(join(here, 'codemod-map.json'), 'utf8'));

test('every `map` target exists in `src/`', () => {
  for (const target of Object.values(codemodMap.map)) {
    assert.ok(existsSync(join(here, '..', '..', 'src', target)), `missing src/${target}`);
  }
});

test('every v8 file name appears exactly once across `map` and `unmapped`', () => {
  const names = JSON.parse(readFileSync(join(here, 'garden-v8-files.json'), 'utf8'));
  const nameSet = new Set(names);

  for (const name of names) {
    const inMap = Object.hasOwn(codemodMap.map, name);
    const inUnmapped = codemodMap.unmapped.includes(name);

    assert.notEqual(inMap, inUnmapped, `${name} must appear exactly once`);
  }

  for (const key of [...Object.keys(codemodMap.map), ...codemodMap.unmapped]) {
    assert.ok(nameSet.has(key), `${key} is not a v8 file name`);
  }
});
