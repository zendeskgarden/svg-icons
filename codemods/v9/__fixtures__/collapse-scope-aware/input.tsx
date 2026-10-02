import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import XFillIcon from '@zendeskgarden/svg-icons/src/16/x-fill.svg';

const labels = { XFillIcon: 'Close (selected)' };
const fromTheme = (theme: { XFillIcon: string }) => theme.XFillIcon;
const local = (XFillIcon: string) => XFillIcon.length;

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label={labels.XFillIcon}>{active ? <XFillIcon /> : <XStrokeIcon />}</button>
);

export { fromTheme, local };
