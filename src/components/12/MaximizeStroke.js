import * as React from 'react';

function SvgMaximizeStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M.5 3.5V1C.5.7.7.5 1 .5h2.5m8 3V1c0-.3-.2-.5-.5-.5H8.5m3 8V11c0 .3-.2.5-.5.5H8.5m-8-3V11c0 .3.2.5.5.5h2.5m0-8L1 1m7.5 7.5L11 11M8.5 3.5L11 1M3.5 8.5L1 11"
      />
    </svg>
  );
}

export default SvgMaximizeStroke;
