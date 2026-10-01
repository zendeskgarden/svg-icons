import React from 'react';
import xStrokeUrl from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as XFillIcon } from '@zendeskgarden/svg-icons/src/16/x-fill.svg';

export const CloseButton = () => (
  <button aria-label="Close">
    <img alt="" src={xStrokeUrl} />
    <XFillIcon />
  </button>
);
