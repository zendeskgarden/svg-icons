import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/x.svg';

const labels = { XFillIcon: 'Close (selected)' };
const fromTheme = (theme: { XFillIcon: string }) => theme.XFillIcon;
const local = (XFillIcon: string) => XFillIcon.length;

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label={labels.XFillIcon}>{active ? <XStrokeIcon /> : <XStrokeIcon />}</button>
);

export { fromTheme, local };
