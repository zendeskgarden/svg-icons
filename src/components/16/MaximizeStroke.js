import * as React from 'react';

function SvgMaximizeStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M4.5.5H1C.72.5.5.72.5 1v3.5m15 0V1c0-.28-.22-.5-.5-.5h-3.5m-11 11V15c0 .28.22.5.5.5h3.5m11-4V15c0 .28-.22.5-.5.5h-3.5m-7-11L1 1m10.5 3.5L15 1M4.5 11.5L1 15m10.5-3.5L15 15"
      />
    </svg>
  );
}

export default SvgMaximizeStroke;
