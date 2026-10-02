#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Branch guard for `npm run tag`. Release commits are created on the `main`
 * and `v8` branches only, and `v8` requires an 8.x package version. The
 * branch check runs before `commit-and-tag-version` bumps the version, so
 * `main` still holds an 8.x version when the first v9 prerelease is tagged.
 *
 * `commit-and-tag-version` creates the release commit and tag locally; it
 * does not push them. Push the commit and tag together:
 *
 * ```sh
 * git push origin <branch> --follow-tags
 * ```
 */
import { execFileSync, spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import semver from 'semver';

const TAGGABLE_BRANCHES = ['main', 'v8'];

const COMMIT_AND_TAG_VERSION = fileURLToPath(
  new URL('../node_modules/.bin/commit-and-tag-version', import.meta.url)
);

/**
 * @param {string} branch The current git branch.
 * @param {string} version The current `package.json` version.
 * @throws When the branch may not create a release, or when the package
 * version does not belong to the branch's release line.
 */
export function assertTaggableBranch(branch, version) {
  if (!TAGGABLE_BRANCHES.includes(branch)) {
    throw new Error(
      `Releases can only be tagged on the "main" and "v8" branches (current: "${branch}").`
    );
  }

  const parsed = semver.parse(version);

  if (!parsed || parsed.build.length > 0) {
    throw new Error(`Invalid package version: ${version}`);
  }

  if (branch === 'v8' && parsed.major !== 8) {
    throw new Error(`The "v8" branch can only tag 8.x releases (package version: ${version}).`);
  }
}

/**
 * Run `commit-and-tag-version` with the repository's standard flags plus any
 * user arguments, for example:
 *
 * ```sh
 * npm run tag -- --release-as patch
 * npm run tag -- --release-as major --prerelease next
 * npm run tag -- --release-as 9.0.0
 * ```
 *
 * @param {object} [io] Injectable I/O, used by tests.
 * @param {string[]} [io.args] User arguments forwarded to `commit-and-tag-version`.
 * @param {string} [io.branch] The current git branch.
 * @param {string} [io.version] The current `package.json` version.
 * @param {Function} [io.spawnImpl] The `spawn` implementation to use.
 * @param {object} [io.stderr] The standard error stream.
 * @returns {Promise<number>} The process exit code.
 */
export async function main({
  args = [],
  branch,
  version,
  spawnImpl = spawn,
  stderr = process.stderr
} = {}) {
  try {
    assertTaggableBranch(branch, version);

    await new Promise((resolve, reject) => {
      const child = spawnImpl(
        COMMIT_AND_TAG_VERSION,
        ['--no-verify', '--npmPublishHint', 'true', ...args],
        { stdio: 'inherit' }
      );

      child.on('error', reject);
      child.on('close', code => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`commit-and-tag-version exited with status ${code}.`));
        }
      });
    });

    return 0;
  } catch (error) {
    stderr.write(`${error instanceof Error ? error.message : error}\n`);

    return 1;
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const branch = execFileSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
    encoding: 'utf8'
  }).trim();
  const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

  process.exitCode = await main({ args: process.argv.slice(2), branch, version });
}
