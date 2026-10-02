import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/x.svg';

const icons = { stroke: XStrokeIcon, fill: XStrokeIcon };

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XStrokeIcon /> : <XStrokeIcon />}</button>
);

export const iconMap = icons;
