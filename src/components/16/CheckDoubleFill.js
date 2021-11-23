import * as React from 'react';

function SvgCheckDoubleFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 9l2.5 2.5L10 5m-1.5 6.5L15 5"
      />
    </svg>
  );
}

export default SvgCheckDoubleFill;
