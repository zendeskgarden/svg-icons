/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { sharedPropTypes } from './common';

const Icon = ({ color, fill, id, size }) => (
  <svg id={id} style={{ color, fill, fontSize: size }}>
    <use xlinkHref={`./index.svg#${id}`} />
  </svg>
);

Icon.propTypes = {
  ...sharedPropTypes,
  id: PropTypes.string
};

export default Icon;
