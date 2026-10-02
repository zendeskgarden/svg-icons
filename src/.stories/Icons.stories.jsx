/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { sharedArgTypes, sharedPropTypes } from './common';
import IconGrid from './IconGrid';
import React from 'react';
import { SVGs } from './icons';

export default {
  title: 'Icons'
};

export const Icons = {
  render: ({ color, fill, size }) => <IconGrid color={color} fill={fill} size={size} svgs={SVGs} />,
  args: { size: 20 },
  argTypes: sharedArgTypes,
  propTypes: sharedPropTypes
};
