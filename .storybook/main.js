/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  stories: ['../src/.stories/*.stories.mdx', '../src/.stories/*.stories.js'],
  addons: [{ name: '@storybook/addon-essentials', options: { actions: false } }],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    config.output.hashFunction = 'xxhash64';

    return config;
  }
};
