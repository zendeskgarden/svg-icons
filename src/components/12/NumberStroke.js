import * as React from 'react';

function SvgNumberStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.5 4.5H11m-10 3h9.5M8.5 1l-2 10m-1-10l-2 10"
      />
    </svg>
  );
}

export default SvgNumberStroke;
