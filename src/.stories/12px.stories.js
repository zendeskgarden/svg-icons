/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IconsComponent, sharedArgTypes, sharedPropTypes } from './common';

export default {
  title: '12 px',
  render: IconsComponent
};

export const Icons = {
  args: { size: 12 },
  argTypes: { ...sharedArgTypes },
  propTypes: { ...sharedPropTypes }
};
