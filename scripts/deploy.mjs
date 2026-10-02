#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  cmdDu,
  githubBranch,
  githubCommit,
  githubDeploy,
  githubPages,
  githubRepository,
  netlifyBandwidth,
  netlifyDeploy
} from '@zendeskgarden/scripts';
import { dirname, resolve } from 'node:path';
import envalid from 'envalid';
import { fileURLToPath } from 'node:url';
import { releaseChannel } from './release.mjs';

/* Repeats the `deploy` tag filter in `.circleci/config.yml` on purpose. */
const FINAL_RELEASE_TAG = /^v\d+\.\d+\.\d+$/u;

envalid.cleanEnv(process.env, {
  GITHUB_TOKEN: envalid.str(),
  NETLIFY_SITE_ID: envalid.str(),
  NETLIFY_TOKEN: envalid.str()
});

const tag = process.env.CIRCLE_TAG ?? '';

(async () => {
  try {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const dir = resolve(currentDir, '..', 'demo');
    let url;

    /* The public demo site tracks npm `latest`, so it deploys on final release tags only. */
    if (tag) {
      if (!FINAL_RELEASE_TAG.test(tag)) {
        /* eslint-disable-next-line no-console */
        console.log(`Skipping deploy: ${tag} is not a final release tag.`);

        return;
      }

      const { deployDemo } = await releaseChannel();

      if (!deployDemo) {
        /* eslint-disable-next-line no-console */
        console.log(`Skipping GitHub Pages deploy: ${tag} is older than npm latest.`);

        return;
      }

      url = await githubPages({ dir });
    } else if ((await githubBranch()) === 'main') {
      /* eslint-disable-next-line no-console */
      console.log(
        'Skipping GitHub Pages deploy: the demo site publishes on final release tags only.'
      );

      return;
    } else {
      const bandwidth = await netlifyBandwidth();
      const usage = await cmdDu(dir);

      if (bandwidth.available > usage) {
        const repository = await githubRepository();
        const commit = await githubCommit();
        const message = `https://github.com/${repository.owner}/${repository.repo}/commit/${commit}`;
        const command = async () => {
          const result = await netlifyDeploy({
            dir,
            message
          });

          return result;
        };

        url = await githubDeploy({ command });
      } else {
        throw new Error(
          `Insufficient Netlify bandwidth: ${bandwidth.available} bytes available, ${usage} bytes required.`
        );
      }
    }

    /* eslint-disable-next-line no-console */
    console.log(`Deployed to ${url}`);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);
    process.exitCode = 1;
  }
})();
