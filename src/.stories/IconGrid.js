/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Code, Ellipsis } from '@zendeskgarden/react-typography';
import { Grid } from '@zendeskgarden/react-grid';
import Icon from './Icon';
import PropTypes from 'prop-types';
import React from 'react';
import { sharedPropTypes } from './common';

const IconGrid = ({ color, columns, fill, size, svgs }) => (
  <Grid>
    <Grid.Row>
      {svgs.map(id => (
        <Grid.Col key={id} md={12 / columns} style={{ marginBottom: 20 }} textAlign="center">
          <Icon color={color} fill={fill} id={id} size={size} />
          <br />
          <Ellipsis title={id}>
            <Code size="small" style={{ whiteSpace: 'nowrap' }}>
              {id.substring(15)}
            </Code>
          </Ellipsis>
        </Grid.Col>
      ))}
    </Grid.Row>
  </Grid>
);

IconGrid.propTypes = {
  ...sharedPropTypes,
  columns: PropTypes.number,
  svgs: PropTypes.array
};

IconGrid.defaultProps = {
  columns: 4
};

export default IconGrid;
