/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React from 'react';
import { create } from '@storybook/theming/create';
import svg4everybody from 'svg4everybody';

const DARK_THEME = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: 'dark' } };
const DARK = getColor({ theme: DARK_THEME, variable: 'background.default' });
const LIGHT = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

const GlobalPreviewStyling = createGlobalStyle`
  body {
    background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
    color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  }
`;

const withThemeProvider = (Story, context) => {
  svg4everybody({ polyfill: true });

  const colors = {
    ...DEFAULT_THEME.colors,
    primaryHue: context.globals.primaryHue,
    variables: {
      ...DEFAULT_THEME.colors.variables,
      dark: context.args['colors.dark'],
      light: context.args['colors.light']
    }
  };

  if (
    context.globals.backgrounds && context.globals.backgrounds.value !== 'transparent'
      ? context.globals.backgrounds.value === DARK
      : context.parameters.backgrounds.default === 'dark'
  ) {
    colors.base = 'dark';
  }

  const theme = { ...DEFAULT_THEME, colors };

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
    grid: { disable: true },
    values: [
      { name: 'light', value: LIGHT },
      { name: 'dark', value: DARK }
    ]
  },
  docs: {
    theme: create({
      base: DEFAULT_THEME.colors.base
    })
  },
  options: {
    storySort: {
      order: ['README']
    }
  }
};
