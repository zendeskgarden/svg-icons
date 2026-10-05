import React from 'react';
import XIcon from '@zendeskgarden/svg-icons/src/x.svg';

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XIcon /> : <XIcon />}</button>
);
