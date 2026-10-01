import React from 'react';
// TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.
import xStrokeUrl from '@zendeskgarden/svg-icons/src/x.svg';
// TODO(svg-icons v9): stroke and fill are now one file, imported twice here. Merge the imports manually.
import { ReactComponent as XFillIcon } from '@zendeskgarden/svg-icons/src/x.svg';

export const CloseButton = () => (
  <button aria-label="Close">
    <img alt="" src={xStrokeUrl} />
    <XFillIcon />
  </button>
);
