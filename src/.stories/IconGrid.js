/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Code, Ellipsis } from '@zendeskgarden/react-typography';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import Icon from './Icon';
import PropTypes from 'prop-types';
import React from 'react';

const IconGrid = ({ color, columns, fill, size, svgs, iconComponents }) => (
  <Grid>
    <Row>
      {svgs &&
        svgs.map(id => (
          <Col key={id} md={12 / columns} style={{ marginBottom: 20 }} textAlign="center">
            <Icon color={color} fill={fill} id={id} size={size} />
            <br />
            <Ellipsis title={id}>
              <Code size="small" style={{ whiteSpace: 'nowrap' }}>
                {id.substring(15)}
              </Code>
            </Ellipsis>
          </Col>
        ))}
      {iconComponents &&
        Object.keys(iconComponents).map(iconKey => {
          const Icon = iconComponents[iconKey];
          return (
            <Col key={iconKey} md={12 / 4} style={{ marginBottom: 20 }} textAlign="center">
              <Icon width={size} height={size} style={{ color, fill, fontSize: size }} />
              <br />
              <Ellipsis title={iconKey}>
                <Code size="small" style={{ whiteSpace: 'nowrap' }}>
                  {iconKey}
                </Code>
              </Ellipsis>
            </Col>
          );
        })}
    </Row>
  </Grid>
);

IconGrid.propTypes = {
  color: PropTypes.string,
  columns: PropTypes.number,
  fill: PropTypes.string,
  size: PropTypes.number,
  svgs: PropTypes.array,
  iconComponents: PropTypes.object
};

IconGrid.defaultProps = {
  columns: 4
};

export default IconGrid;
