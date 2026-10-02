import React from 'react';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import XFillIcon from '@zendeskgarden/svg-icons/src/16/x-fill.svg';

export const SelectedClose = ({ selected }: { selected: boolean }) => {
  const XStrokeIcon = selected ? 'Close (selected)' : 'Close';

  return <XFillIcon aria-label={XStrokeIcon} />;
};

export const Close = () => <XStrokeIcon />;
