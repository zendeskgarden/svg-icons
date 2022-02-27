import * as React from 'react';

function SvgShieldStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M8 15.5S14.5 13 14.5 5V3L8 .5 1.5 3v2C1.5 13 8 15.5 8 15.5z"
      />
    </svg>
  );
}

export default SvgShieldStroke;
