import * as React from 'react';

function SvgClipboardBlankFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0C5.8 0 4 1.8 4 4v1h8V4c0-2.2-1.8-4-4-4zm6 16H2c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h.5c.3 0 .5.2.5.5V5c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V2.5c0-.3.2-.5.5-.5h.5c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z"
      />
    </svg>
  );
}

export default SvgClipboardBlankFill;
