/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import { PALETTE } from '@zendeskgarden/react-theming';

import { IconComponents } from './components';
import IconGrid from './IconGrid';

export default {
  title: 'React components'
};

const args = {
  fill: PALETTE.kale[700],
  size: 26
};

const argTypes = {
  color: {
    name: 'Color',
    control: 'color'
  },
  fill: {
    name: 'Fill',
    control: 'color'
  },
  size: {
    name: 'Size',
    control: { type: 'range', min: 8, max: 104, step: 1 }
  }
};

const filterIcons = (iconComponents, filterFn) =>
  Object.fromEntries(Object.entries(iconComponents).filter(filterFn));

export const Icons = ({ color, fill, size }) => (
  <IconGrid
    color={color}
    fill={fill}
    size={size}
    iconComponents={filterIcons(IconComponents, ([key]) => !key.includes('Wordmark'))}
  />
);

Icons.args = {
  ...args
};

Icons.argTypes = {
  ...argTypes
};

Icons.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number
};

export const Wordmarks = ({ color, fill, size }) => (
  <IconGrid
    color={color}
    fill={fill}
    size={size}
    iconComponents={filterIcons(IconComponents, ([key]) => key.includes('Wordmark'))}
  />
);

Wordmarks.args = {
  ...args
};

Wordmarks.argTypes = {
  ...argTypes
};

Wordmarks.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number
};
