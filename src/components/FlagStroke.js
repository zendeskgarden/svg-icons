import * as React from 'react';

function SvgFlagStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M2.5 15.5V.5m0 8h10.8c.4 0 .7-.5.4-.9L11 5l2.6-2.6c.4-.4.1-.9-.3-.9H2.5v7z"
      />
    </svg>
  );
}

export default SvgFlagStroke;
