/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    brandTitle: 'Zendesk Garden SVG Icons',
    brandUrl: 'https://zendeskgarden.github.io/svg-icons',
    brandImage: 'https://zendeskgarden.github.io/favicons/garden/mask-icon.svg',
    colorSecondary: DEFAULT_THEME.palette.blue[600],
    fontBase: DEFAULT_THEME.fonts.system,
    fontCode: DEFAULT_THEME.fonts.mono
  })
});
