import React from 'react';
// TODO(svg-icons v9): this was a 12px icon; the new icon is 20px. Set its size explicitly.
import XStrokeIcon from '@zendeskgarden/svg-icons/src/x.svg';

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XStrokeIcon /> : <XStrokeIcon />}</button>
);
