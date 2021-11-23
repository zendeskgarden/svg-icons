import * as React from 'react';

function SvgCheckDoubleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.5 9L4 11.5 10.5 5M8 11.5L14.5 5"
      />
    </svg>
  );
}

export default SvgCheckDoubleStroke;
