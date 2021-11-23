import * as React from 'react';

function SvgCheckSmStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M3 6l2 2 4-4"
      />
    </svg>
  );
}

export default SvgCheckSmStroke;
