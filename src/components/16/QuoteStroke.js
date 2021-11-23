import * as React from 'react';

function SvgQuoteStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M7 7.5H4c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zm6 0h-3c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM12 12c1-1 1.5-2.5 1.5-4V6M6 12c1-1 1.5-2.5 1.5-4V6"
      />
    </svg>
  );
}

export default SvgQuoteStroke;
