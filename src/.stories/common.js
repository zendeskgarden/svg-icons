/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PropTypes } from 'prop-types';

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
