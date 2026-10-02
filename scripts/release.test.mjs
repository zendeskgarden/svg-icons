/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { assertCircleTag, main, releaseChannel, selectReleaseChannel } from './release.mjs';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const PACKAGE = { name: '@zendeskgarden/svg-icons', version: '9.0.0-next.0' };

const jsonResponse = (body, { ok = true, status = 200 } = {}) => ({
  ok,
  status,
  json: () => Promise.resolve(body)
});

const fetchDistTags = distTags => () => Promise.resolve(jsonResponse(distTags));

const readPackage =
  (pkg = PACKAGE) =>
  () =>
    pkg;

function fakeStreams() {
  const out = [];
  const err = [];

  return {
    stdout: { write: chunk => out.push(chunk) },
    stderr: { write: chunk => err.push(chunk) },
    out: () => out.join(''),
    err: () => err.join('')
  };
}

describe('selectReleaseChannel', () => {
  describe('final versions', () => {
    it('selects `latest` when the current version equals npm `latest`', () => {
      assert.deepEqual(selectReleaseChannel('8.4.0', { latest: '8.4.0' }), {
        distTag: 'latest',
        deployDemo: true
      });
    });

    it('selects `latest` when the current version is newer than npm `latest`', () => {
      assert.deepEqual(selectReleaseChannel('9.0.0', { latest: '8.4.0' }), {
        distTag: 'latest',
        deployDemo: true
      });
    });

    it('selects `v<major>-latest` for an older major version', () => {
      assert.deepEqual(selectReleaseChannel('8.4.1', { latest: '9.0.0' }), {
        distTag: 'v8-latest',
        deployDemo: false
      });
    });

    it('selects the maintenance tag for an older minor or patch version', () => {
      assert.deepEqual(selectReleaseChannel('8.3.1', { latest: '8.4.0' }), {
        distTag: 'v8-latest',
        deployDemo: false
      });
    });

    it('proceeds when the maintenance tag already points to an older version', () => {
      assert.deepEqual(selectReleaseChannel('8.4.1', { latest: '9.0.0', 'v8-latest': '8.4.0' }), {
        distTag: 'v8-latest',
        deployDemo: false
      });
    });

    it('fails when the maintenance tag points to a newer version', () => {
      assert.throws(
        () => selectReleaseChannel('8.4.0', { latest: '9.0.0', 'v8-latest': '8.4.1' }),
        /would move the "v8-latest" dist-tag from 8\.4\.1 to an older version/u
      );
    });

    it('proceeds when the maintenance tag does not exist yet', () => {
      assert.deepEqual(selectReleaseChannel('8.4.1', { latest: '9.0.0' }), {
        distTag: 'v8-latest',
        deployDemo: false
      });
    });
  });

  describe('prerelease versions', () => {
    it('selects `next` for a new-major prerelease', () => {
      assert.deepEqual(selectReleaseChannel('9.0.0-next.0', { latest: '8.4.0' }), {
        distTag: 'next',
        deployDemo: false
      });
    });

    it('selects `v<major>-next` for an older-major prerelease', () => {
      assert.deepEqual(selectReleaseChannel('8.4.1-next.0', { latest: '9.0.0' }), {
        distTag: 'v8-next',
        deployDemo: false
      });
    });

    it('sorts SemVer prerelease identifiers numerically, not lexically', () => {
      /* A lexical comparison would order "next.9" after "next.10". */
      assert.deepEqual(
        selectReleaseChannel('9.0.0-next.10', { latest: '8.4.0', next: '9.0.0-next.9' }),
        { distTag: 'next', deployDemo: false }
      );
      assert.throws(
        () => selectReleaseChannel('9.0.0-next.9', { latest: '8.4.0', next: '9.0.0-next.10' }),
        /would move the "next" dist-tag/u
      );
    });

    it('sorts SemVer prerelease identifier prefixes', () => {
      assert.deepEqual(
        selectReleaseChannel('9.0.0-rc.1', { latest: '8.4.0', next: '9.0.0-next.9' }),
        { distTag: 'next', deployDemo: false }
      );
      assert.throws(
        () => selectReleaseChannel('9.0.0-alpha.1', { latest: '8.4.0', next: '9.0.0-beta.1' }),
        /would move the "next" dist-tag/u
      );
    });

    it('fails when the target `next` value is newer', () => {
      assert.throws(
        () => selectReleaseChannel('9.0.0-next.0', { latest: '8.4.0', next: '9.0.0-next.1' }),
        /would move the "next" dist-tag from 9\.0\.0-next\.1 to an older version/u
      );
    });
  });

  describe('errors', () => {
    it('fails on an invalid local version', () => {
      assert.throws(() => selectReleaseChannel('not-a-version', { latest: '8.4.0' }), {
        message: 'Invalid package version: not-a-version'
      });
    });

    it('fails on a local version with build metadata', () => {
      assert.throws(() => selectReleaseChannel('9.0.0+build.1', { latest: '8.4.0' }), {
        message: 'Invalid package version (build metadata is not allowed): 9.0.0+build.1'
      });
    });

    it('fails on an invalid npm `latest` value', () => {
      assert.throws(() => selectReleaseChannel('9.0.0', { latest: 'banana' }), {
        message: 'Invalid npm "latest" dist-tag version: banana'
      });
    });

    it('fails on a missing npm `latest` value', () => {
      assert.throws(() => selectReleaseChannel('9.0.0', {}), {
        message: 'Invalid npm "latest" dist-tag version: undefined'
      });
    });

    it('fails on an invalid version in the selected dist-tag', () => {
      assert.throws(
        () => selectReleaseChannel('8.4.1', { latest: '9.0.0', 'v8-latest': 'banana' }),
        { message: 'Invalid npm "v8-latest" dist-tag version: banana' }
      );
    });
  });
});

describe('assertCircleTag', () => {
  it('accepts a tag that matches the package version', () => {
    assert.doesNotThrow(() => assertCircleTag('9.0.0', 'v9.0.0'));
  });

  it('accepts a missing tag', () => {
    assert.doesNotThrow(() => assertCircleTag('9.0.0', undefined));
  });

  it('fails on a mismatch between `CIRCLE_TAG` and `package.json`', () => {
    assert.throws(() => assertCircleTag('9.0.0', 'v8.4.0'), {
      message: 'CIRCLE_TAG "v8.4.0" does not match the package version "v9.0.0".'
    });
  });
});

describe('releaseChannel', () => {
  it('fails when the registry request fails', async () => {
    const fetchImpl = () => Promise.reject(new Error('network unavailable'));

    await assert.rejects(releaseChannel({ fetchImpl, readPackageImpl: readPackage() }), {
      message: 'network unavailable'
    });
  });

  it('fails on a non-success registry response', async () => {
    const fetchImpl = () => Promise.resolve(jsonResponse({}, { ok: false, status: 404 }));

    await assert.rejects(releaseChannel({ fetchImpl, readPackageImpl: readPackage() }), {
      message: 'Unable to read npm dist-tags for @zendeskgarden/svg-icons: HTTP 404'
    });
  });

  it('requests the dist-tags of the URI-encoded package name', async () => {
    const urls = [];
    const fetchImpl = url => {
      urls.push(url);

      return Promise.resolve(jsonResponse({ latest: '8.4.0' }));
    };

    await releaseChannel({ fetchImpl, readPackageImpl: readPackage() });

    assert.deepEqual(urls, [
      'https://registry.npmjs.org/-/package/%40zendeskgarden%2Fsvg-icons/dist-tags'
    ]);
  });
});

describe('main', () => {
  it('writes only the dist-tag to standard output on success', async () => {
    const streams = fakeStreams();
    const code = await main({
      ...streams,
      fetchImpl: fetchDistTags({ latest: '8.4.0' }),
      env: {},
      readPackageImpl: readPackage()
    });

    assert.equal(code, 0);
    assert.equal(streams.out(), 'next\n');
    assert.equal(streams.err(), '');
  });

  it('writes an error to standard error and returns nonzero on failure', async () => {
    const streams = fakeStreams();
    const code = await main({
      ...streams,
      fetchImpl: () => Promise.resolve(jsonResponse({}, { ok: false, status: 500 })),
      env: {},
      readPackageImpl: readPackage()
    });

    assert.equal(code, 1);
    assert.equal(streams.out(), '');
    assert.match(streams.err(), /HTTP 500/u);
  });

  it('fails before publication when `CIRCLE_TAG` and `package.json` differ', async () => {
    const streams = fakeStreams();
    let fetched = false;
    const fetchImpl = () => {
      fetched = true;

      return Promise.resolve(jsonResponse({ latest: '8.4.0' }));
    };
    const code = await main({
      ...streams,
      fetchImpl,
      env: { CIRCLE_TAG: 'v9.0.0' },
      readPackageImpl: readPackage()
    });

    assert.equal(code, 1);
    assert.equal(fetched, false);
    assert.equal(streams.out(), '');
    assert.match(
      streams.err(),
      /CIRCLE_TAG "v9\.0\.0" does not match the package version "v9\.0\.0-next\.0"\./u
    );
  });
});
