import * as React from 'react';

function SvgPanelsStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M14 15.5H2c-.3 0-.5-.2-.5-.5V1c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v14c0 .3-.2.5-.5.5zM7.5.5v15m-6-4h6m0-7h7"
      />
    </svg>
  );
}

export default SvgPanelsStroke;
