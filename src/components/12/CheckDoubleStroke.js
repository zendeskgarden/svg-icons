import * as React from 'react';

function SvgCheckDoubleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 6l2.5 2.5 5-5m-2 5l5-5"
      />
    </svg>
  );
}

export default SvgCheckDoubleStroke;
