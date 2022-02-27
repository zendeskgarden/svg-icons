import * as React from 'react';

function SvgClipboardBlankStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M4.5 2.5H2a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5h-2.5m-6.95 2C4.25 2.42 5.883.5 8 .5s3.75 1.92 3.45 4h-6.9z"
      />
    </svg>
  );
}

export default SvgClipboardBlankStroke;
