import React from 'react';
// TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.
import XStrokeIcon from '@zendeskgarden/svg-icons/src/x.svg';
// TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.
import XFillIcon, { ReactComponent as XFillComponent } from '@zendeskgarden/svg-icons/src/x.svg';

export const CloseButton = ({ active }: { active: boolean }) => (
  <button aria-label="Close">{active ? <XFillComponent /> : <XStrokeIcon />}</button>
);

export const closeIconUrl = XFillIcon;
