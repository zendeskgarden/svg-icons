/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { create } from '@storybook/theming/create';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { PARAM_KEY as viewMode } from '@storybook/addon-docs/dist/shared';

import './preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: DEFAULT_THEME.colors.base,
    grid: { disable: true }
  },
  docs: {
    theme: create({
      base: DEFAULT_THEME.colors.base
    })
  }
};
