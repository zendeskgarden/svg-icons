/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

module.exports = {
  stories: ['../src/.stories/*.mdx', '../src/.stories/*.stories.js'],
  staticDirs: ['../dist'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-swc'
  ],
  webpackFinal: config => {
    config.output.hashFunction = 'xxhash64';

    return config;
  }
};
