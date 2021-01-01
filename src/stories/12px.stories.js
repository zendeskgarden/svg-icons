/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import IconGrid from './IconGrid';
import PropTypes from 'prop-types';
import React from 'react';
import { SVGs } from './12px';

export default {
  title: '12 px'
};

export const Icons = ({ color, fill, size }) => (
  <IconGrid color={color} fill={fill} size={size} svgs={SVGs} />
);

Icons.args = {
  size: 12
};

Icons.argTypes = {
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
    control: { type: 'range', min: 8, max: 60, step: 1 }
  }
};

Icons.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number
};
