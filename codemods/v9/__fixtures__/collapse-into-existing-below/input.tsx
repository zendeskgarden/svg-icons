import React from 'react';
import XFillIcon from '@zendeskgarden/svg-icons/src/16/x-fill.svg';
import XIcon from '@zendeskgarden/svg-icons/src/x.svg';

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XFillIcon /> : <XIcon />}</button>
);
