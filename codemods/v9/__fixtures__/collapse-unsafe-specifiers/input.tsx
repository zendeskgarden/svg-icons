import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import XFillIcon, { ReactComponent as XFillComponent } from '@zendeskgarden/svg-icons/src/16/x-fill.svg';

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XFillComponent /> : <XStrokeIcon />}</button>
);

export const closeIconUrl = XFillIcon;
