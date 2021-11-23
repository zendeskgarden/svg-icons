import * as React from 'react';

function SvgNumberStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M2.1 5.5H15m-14.1 5h13m-1.9-9l-3 13m-2-13l-3 13"
      />
    </svg>
  );
}

export default SvgNumberStroke;
