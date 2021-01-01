/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

const Icon = ({ color, fill, id, size }) => (
  <svg id={id} style={{ color, fill, fontSize: size }}>
    <use xlinkHref={`./index.svg#${id}`} />
  </svg>
);

export default Icon;
