import * as React from 'react';

function SvgCalendarFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 3V1m6 2V1"
      />
      <path
        fill="currentColor"
        d="M11 2v1c0 1.1-.9 2-2 2s-2-.9-2-2V2H5v1c0 1.1-.9 2-2 2s-2-.9-2-2V2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z"
      />
    </svg>
  );
}

export default SvgCalendarFill;
