import React from 'react';
// TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.
import XStrokeIcon from '@zendeskgarden/svg-icons/src/x.svg';
// TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.
import XFillIcon from '@zendeskgarden/svg-icons/src/x.svg';

export const SelectedClose = ({ selected }: { selected: boolean }) => {
  const XStrokeIcon = selected ? 'Close (selected)' : 'Close';

  return <XFillIcon aria-label={XStrokeIcon} />;
};

export const Close = () => <XStrokeIcon />;
