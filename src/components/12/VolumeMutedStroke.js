import * as React from 'react';

function SvgVolumeMutedStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M3 7.5l2.6 2.6c.3.3.9.1.9-.3V2.2c0-.4-.5-.7-.9-.3L3 4.5H1c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5h2zm5.5 0l3-3m-3 0l3 3"
      />
    </svg>
  );
}

export default SvgVolumeMutedStroke;
