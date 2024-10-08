/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { sharedArgTypes, sharedPropTypes } from './common';
import { Grid } from '@zendeskgarden/react-grid';
import Icon from './Icon';
import IconGrid from './IconGrid';
import { PALETTE } from '@zendeskgarden/react-theming';
import React from 'react';
import { SVGs } from './26px';
import styled from 'styled-components';

export default {
  title: '26 px'
};

const args = { fill: PALETTE.kale[900], size: 26 };

const argTypes = {
  ...sharedArgTypes,
  size: {
    ...sharedArgTypes.size,
    control: {
      ...sharedArgTypes.size.control,
      max: 104
    }
  }
};

const propTypes = sharedPropTypes;

export const Icons = {
  render: ({ color, fill, size }) => (
    <IconGrid
      color={color}
      fill={fill}
      size={size}
      svgs={SVGs.filter(value => {
        return !value.includes('wordmark');
      })}
    />
  ),
  args,
  argTypes,
  propTypes
};

export const Wordmarks = {
  render: ({ color, fill, size }) => (
    <IconGrid
      color={color}
      columns={2}
      fill={fill}
      size={size}
      svgs={SVGs.filter(value => {
        return value.includes('wordmark');
      })}
    />
  ),
  args,
  argTypes,
  propTypes
};

const StyledSpan = styled.span`
  display: inline-block;
  margin-top: 0.19em;
  margin-left: 0.92em;
  font-size: ${props => props.size}px;
`;

export const WordmarkLayouts = {
  render: ({ color, fill, size }) => (
    <Grid>
      {Object.keys(PALETTE.product).map(product => (
        <Grid.Row key={product}>
          <Grid.Col md={6} style={{ marginBottom: 20 }}>
            <Icon
              color={color || PALETTE.product[product]}
              fill={fill}
              id={`zd-svg-icon-26-relationshape-${product}`}
              size={size}
            />
            <StyledSpan size={size}>
              <Icon color={color} id={`zd-svg-icon-26-wordmark-${product}`} />
            </StyledSpan>
          </Grid.Col>
          <Grid.Col md={6} style={{ marginBottom: 20 }}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-zendesk" size={size} />
            <span style={{ display: 'inline-block', marginLeft: '.22em', fontSize: size }}>
              <Icon color={color} id={`zd-svg-icon-26-wordmark-${product}`} />
            </span>
          </Grid.Col>
        </Grid.Row>
      ))}
      <Grid.Row>
        <Grid.Col md={6} style={{ marginBottom: 20 }}>
          <Icon
            color={color || PALETTE.product.talk}
            fill={fill}
            id="zd-svg-icon-26-sunshine"
            size={size}
          />
          <StyledSpan size={size}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-sunshine" />
          </StyledSpan>
        </Grid.Col>
        <Grid.Col md={6} style={{ marginBottom: 20 }}>
          <Icon color={color} id="zd-svg-icon-26-wordmark-zendesk" size={size} />
          <span style={{ display: 'inline-block', marginLeft: '.22em', fontSize: size }}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-sunshine" />
          </span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col md={6} style={{ marginBottom: 20 }}>
          <Icon
            color={color || PALETTE.green[500]}
            fill={fill}
            id="zd-svg-icon-26-garden"
            size={size}
          />
          <StyledSpan size={size}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-garden" />
          </StyledSpan>
        </Grid.Col>
        <Grid.Col md={6} style={{ marginBottom: 20 }}>
          <Icon color={color} id="zd-svg-icon-26-wordmark-zendesk" size={size} />
          <span style={{ display: 'inline-block', marginLeft: '.22em', fontSize: size }}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-garden" />
          </span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col md={6} style={{ marginBottom: 20 }}>
          <Icon
            color={color || PALETTE.kale[900]}
            fill={fill}
            id="zd-svg-icon-26-zendesk"
            size={size}
          />
          <StyledSpan size={size} style={{ marginTop: '.14em' }}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-capital-the" />
            &nbsp;
            <Icon color={color} id="zd-svg-icon-26-wordmark-capital-zendesk" />
            &nbsp;
            <Icon color={color} id="zd-svg-icon-26-wordmark-capital-suite" />
          </StyledSpan>
        </Grid.Col>
        <Grid.Col md={6} style={{ marginBottom: 20 }}>
          <Icon color={color} id="zd-svg-icon-26-wordmark-capital-zendesk" size={size} />
          <span style={{ display: 'inline-block', marginLeft: '.22em', fontSize: size }}>
            <Icon color={color} id="zd-svg-icon-26-wordmark-capital-suite" />
          </span>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  ),
  args,
  argTypes: {
    ...argTypes,
    size: {
      ...argTypes.size,
      control: {
        ...argTypes.size.control,
        min: 16,
        max: 48
      }
    }
  },
  propTypes
};
