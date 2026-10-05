/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import config from '@zendeskgarden/eslint-config';
import noticePlugin from '@zendeskgarden/eslint-config/plugins/notice.js';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from '@zendeskgarden/eslint-config/plugins/react.js';

export default [
  ...config,
  noticePlugin,
  reactPlugin,
  prettierConfig,
  {
    // codemod fixtures are verbatim jscodeshift inputs/outputs, not product code
    ignores: ['codemods/**/__fixtures__']
  },
  {
    languageOptions: {
      parserOptions: {
        // the project no longer maintains a Babel configuration
        requireConfigFile: false
      }
    }
  }
];
