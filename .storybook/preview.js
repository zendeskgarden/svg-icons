/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React from 'react';
import { create } from 'storybook/theming';
import svg4everybody from 'svg4everybody';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } };
const DARK = getColor({ theme: DARK_THEME, variable: 'background.default' });
const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

const GlobalPreviewStyling = createGlobalStyle`
  body {
    background-color: ${({ theme }) => getColor({ theme, variable: 'background.default' })};
    color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  }
`;

const withThemeProvider = (Story, { globals }) => {
  svg4everybody({ polyfill: true });

  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
      base: globals.backgrounds?.value === 'dark' ? 'dark' : 'light'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalPreviewStyling />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  backgrounds: {
    options: { light: { name: 'light', value: LIGHT }, dark: { name: 'dark', value: DARK } }
  },
  docs: { theme: create({ base: DEFAULT_THEME.colors.base }) },
  options: { storySort: { order: ['README'] } }
};
