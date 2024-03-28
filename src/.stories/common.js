/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PropTypes } from 'prop-types';
import IconGrid from './IconGrid';
import React from 'react';
import { SVGs } from './12px';

export const IconsComponent = ({ color, fill, size }) => (
  <IconGrid color={color} fill={fill} size={size} svgs={SVGs} />
);

export const sharedArgTypes = {
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
    control: {
      type: 'range',
      min: 8,
      max: 60,
      step: 1
    }
  }
};

export const sharedPropTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number
};
