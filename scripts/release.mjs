#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Release channel for the `package.json` version, used by the CircleCI
 * `publish` job (prints the npm dist-tag) and `scripts/deploy.mjs`.
 *
 * A version below npm `latest` is an older-line hotfix (for example 8.x after
 * 9.0.0). It publishes under `v<major>-latest` or `v<major>-next` so `latest`
 * never moves backwards, and it never deploys the public demo site. Plain
 * `v<major>` is not an option: npm rejects dist-tags that parse as semver
 * ranges.
 *
 * The file has two interfaces:
 *
 * - Executable: `node scripts/release.mjs` writes only the selected dist-tag
 *   to stdout, and exits nonzero after writing an error to stderr when
 *   selection fails. When `CIRCLE_TAG` is set, it must equal
 *   `v<package.json version>` so a mismatched tag fails before `npm publish`.
 * - Imported module: `releaseChannel()` returns `distTag` and `deployDemo`.
 *
 * The channel decision itself is pure: `selectReleaseChannel()` receives the
 * version and the npm dist-tags, so tests need no file or network access.
 */
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import semver from 'semver';

/**
 * Parse a strict SemVer version. Build metadata (for example `9.0.0+build.1`)
 * is rejected: release tags and package versions never carry it, so accepting
 * it could only hide a tagging mistake.
 *
 * @param {string} version The version to parse.
 * @param {string} label Identifies the version in error messages.
 * @returns {semver.SemVer} The parsed version.
 */
function parseVersion(version, label) {
  const parsed = semver.parse(version);

  if (!parsed) {
    throw new Error(`Invalid ${label}: ${version}`);
  }

  if (parsed.build.length > 0) {
    throw new Error(`Invalid ${label} (build metadata is not allowed): ${version}`);
  }

  return parsed;
}

/**
 * Select the npm dist-tag for `version` and decide whether the version may
 * deploy the public demo site.
 *
 * - A final version newer than or equal to npm `latest` uses `latest`.
 * - A prerelease newer than npm `latest` uses `next`.
 * - An older final version uses `v<major>-latest`.
 * - An older prerelease uses `v<major>-next`.
 * - Only a final version on the newest release line can deploy the public demo.
 *
 * Publication fails when it would move the target dist-tag to an older
 * version. An equal value is permitted because the deploy job can read npm
 * after the publish job finishes. A target dist-tag that does not exist yet
 * passes: that is the normal path for the first `next` prerelease and the
 * first `v8-latest` hotfix.
 *
 * @param {string} version The `package.json` version to publish.
 * @param {Record<string, string>} distTags The package's npm dist-tags.
 * @returns {{ distTag: string, deployDemo: boolean }} The npm dist-tag to
 * publish under, and whether the public demo site deploys.
 */
export function selectReleaseChannel(version, distTags) {
  const current = parseVersion(version, 'package version');
  const latest = parseVersion(distTags?.latest, 'npm "latest" dist-tag version');
  const isPrerelease = current.prerelease.length > 0;
  let distTag;

  if (semver.lt(current, latest)) {
    distTag = `v${current.major}-${isPrerelease ? 'next' : 'latest'}`;
  } else {
    distTag = isPrerelease ? 'next' : 'latest';
  }

  const target = distTags[distTag];

  if (
    target !== undefined &&
    semver.lt(current, parseVersion(target, `npm "${distTag}" dist-tag version`))
  ) {
    throw new Error(
      `Publishing ${version} would move the "${distTag}" dist-tag from ${target} to an older version.`
    );
  }

  return { distTag, deployDemo: !isPrerelease && distTag === 'latest' };
}

/**
 * Require a present `CIRCLE_TAG` to equal `v<version>` exactly, so a tag that
 * does not match `package.json` fails before `npm publish`.
 *
 * @param {string} version The `package.json` version.
 * @param {string} [tag] The `CIRCLE_TAG` value, if any.
 */
export function assertCircleTag(version, tag) {
  if (tag && tag !== `v${version}`) {
    throw new Error(`CIRCLE_TAG "${tag}" does not match the package version "v${version}".`);
  }
}

function readPackage() {
  return JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
}

/**
 * Fetch the complete npm dist-tag object for `name`. Any failure throws:
 * guessing could overwrite the wrong npm channel, so there is no fallback.
 *
 * @param {string} name The package name.
 * @param {Function} fetchImpl The `fetch` implementation to use.
 * @returns {Promise<Record<string, string>>} The package's npm dist-tags.
 */
async function fetchDistTags(name, fetchImpl) {
  const url = `https://registry.npmjs.org/-/package/${encodeURIComponent(name)}/dist-tags`;
  const response = await fetchImpl(url);

  if (!response.ok) {
    throw new Error(`Unable to read npm dist-tags for ${name}: HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * @param {object} [overrides] Injectable I/O, used by tests.
 * @param {Function} [overrides.fetchImpl] The `fetch` implementation to use.
 * @param {Function} [overrides.readPackageImpl] Reads `package.json` contents.
 * @returns {Promise<{ distTag: string, deployDemo: boolean }>} The npm
 * dist-tag to publish under, and whether the public demo site deploys.
 */
export async function releaseChannel({ fetchImpl = fetch, readPackageImpl = readPackage } = {}) {
  const { name, version } = readPackageImpl();
  const distTags = await fetchDistTags(name, fetchImpl);

  return selectReleaseChannel(version, distTags);
}

/**
 * CLI entry point. Writes only the selected dist-tag to stdout on success;
 * writes the error to stderr and returns a nonzero exit code on failure.
 *
 * @param {object} [io] Injectable I/O, used by tests.
 * @param {object} [io.stdout] The standard output stream.
 * @param {object} [io.stderr] The standard error stream.
 * @param {Function} [io.fetchImpl] The `fetch` implementation to use.
 * @param {object} [io.env] The environment, for `CIRCLE_TAG`.
 * @param {Function} [io.readPackageImpl] Reads `package.json` contents.
 * @returns {Promise<number>} The process exit code.
 */
export async function main({
  stdout = process.stdout,
  stderr = process.stderr,
  fetchImpl = fetch,
  env = process.env,
  readPackageImpl = readPackage
} = {}) {
  try {
    const { name, version } = readPackageImpl();

    assertCircleTag(version, env.CIRCLE_TAG);

    const { distTag } = selectReleaseChannel(version, await fetchDistTags(name, fetchImpl));

    stdout.write(`${distTag}\n`);

    return 0;
  } catch (error) {
    stderr.write(`${error instanceof Error ? error.message : error}\n`);

    return 1;
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  process.exitCode = await main();
}
