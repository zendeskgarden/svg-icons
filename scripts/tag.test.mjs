/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { assertTaggableBranch, main } from './tag.mjs';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

/**
 * A `spawn` stand-in that records its invocation and closes with `code`.
 */
function recordSpawn(code = 0) {
  const calls = [];

  return {
    calls,
    spawnImpl: (command, args, options) => {
      calls.push({ command, args, options });
      const handlers = new Map();

      queueMicrotask(() => handlers.get('close')?.(code));

      return {
        on: (event, handler) => handlers.set(event, handler)
      };
    }
  };
}

function fakeStderr() {
  const err = [];

  return {
    stderr: { write: chunk => err.push(chunk) },
    err: () => err.join('')
  };
}

describe('assertTaggableBranch', () => {
  it('accepts an 8.x package version on `main`', () => {
    assert.doesNotThrow(() => assertTaggableBranch('main', '8.4.0'));
  });

  it('accepts a 9.x package version on `main`', () => {
    assert.doesNotThrow(() => assertTaggableBranch('main', '9.0.0'));
  });

  it('accepts an 8.x package version on `v8`', () => {
    assert.doesNotThrow(() => assertTaggableBranch('v8', '8.4.1'));
  });

  it('rejects a package version from another major on `v8`', () => {
    assert.throws(() => assertTaggableBranch('v8', '9.0.0'), {
      message: 'The "v8" branch can only tag 8.x releases (package version: 9.0.0).'
    });
  });

  it('fails with a clear error on an unrelated branch', () => {
    assert.throws(() => assertTaggableBranch('ze-flo/some-feature', '8.4.0'), {
      message:
        'Releases can only be tagged on the "main" and "v8" branches (current: "ze-flo/some-feature").'
    });
  });

  it('rejects an invalid package version', () => {
    assert.throws(() => assertTaggableBranch('main', 'not-a-version'), {
      message: 'Invalid package version: not-a-version'
    });
  });
});

describe('main', () => {
  it('runs `commit-and-tag-version` with the standard flags', async () => {
    const spawn = recordSpawn();
    const code = await main({
      branch: 'main',
      version: '8.4.0',
      spawnImpl: spawn.spawnImpl,
      ...fakeStderr()
    });

    assert.equal(code, 0);
    assert.equal(spawn.calls.length, 1);
    assert.match(spawn.calls[0].command, /node_modules\/\.bin\/commit-and-tag-version$/u);
    assert.deepEqual(spawn.calls[0].args, ['--no-verify', '--npmPublishHint', 'true']);
  });

  it('passes user arguments to `commit-and-tag-version` unchanged', async () => {
    const spawn = recordSpawn();
    const args = ['--release-as', 'major', '--prerelease', 'next'];
    const code = await main({
      args,
      branch: 'main',
      version: '8.4.0',
      spawnImpl: spawn.spawnImpl,
      ...fakeStderr()
    });

    assert.equal(code, 0);
    assert.deepEqual(spawn.calls[0].args, [
      '--no-verify',
      '--npmPublishHint',
      'true',
      '--release-as',
      'major',
      '--prerelease',
      'next'
    ]);
  });

  it('does not run `commit-and-tag-version` on an unrelated branch', async () => {
    const spawn = recordSpawn();
    const streams = fakeStderr();
    const code = await main({
      branch: 'ze-flo/some-feature',
      version: '8.4.0',
      spawnImpl: spawn.spawnImpl,
      ...streams
    });

    assert.equal(code, 1);
    assert.equal(spawn.calls.length, 0);
    assert.match(streams.err(), /only be tagged on the "main" and "v8" branches/u);
  });

  it('does not run `commit-and-tag-version` for a non-8.x version on `v8`', async () => {
    const spawn = recordSpawn();
    const streams = fakeStderr();
    const code = await main({
      branch: 'v8',
      version: '9.0.0',
      spawnImpl: spawn.spawnImpl,
      ...streams
    });

    assert.equal(code, 1);
    assert.equal(spawn.calls.length, 0);
    assert.match(streams.err(), /can only tag 8\.x releases/u);
  });

  it('fails when `commit-and-tag-version` exits nonzero', async () => {
    const spawn = recordSpawn(2);
    const streams = fakeStderr();
    const code = await main({
      branch: 'main',
      version: '8.4.0',
      spawnImpl: spawn.spawnImpl,
      ...streams
    });

    assert.equal(code, 1);
    assert.match(streams.err(), /commit-and-tag-version exited with status 2/u);
  });
});
