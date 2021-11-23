import * as React from 'react';

function SvgClipboardBlankStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 1.5H2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H8m.45 2c.31-1.525-.895-3-2.45-3-1.555 0-2.76 1.475-2.45 3h4.9z"
      />
    </svg>
  );
}

export default SvgClipboardBlankStroke;
