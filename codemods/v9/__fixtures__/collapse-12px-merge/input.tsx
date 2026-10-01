import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import XFillIcon from '@zendeskgarden/svg-icons/src/12/x-fill.svg';

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XFillIcon /> : <XStrokeIcon />}</button>
);
