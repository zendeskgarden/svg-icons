import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import XFillIcon from '@zendeskgarden/svg-icons/src/16/x-fill.svg';

const icons = { stroke: XStrokeIcon, fill: XFillIcon };

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XFillIcon /> : <XStrokeIcon />}</button>
);

export const iconMap = icons;
