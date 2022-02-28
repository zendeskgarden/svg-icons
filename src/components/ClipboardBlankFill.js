import * as React from 'react';

const SvgClipboardBlankFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 0C4.9 0 4 .9 4 2v1h4V2c0-1.1-.9-2-2-2zm4 1h-.5c-.3 0-.5.2-.5.5V3c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V1.5c0-.3-.2-.5-.5-.5H2c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z"
    />
  </svg>
);

export default SvgClipboardBlankFill;
