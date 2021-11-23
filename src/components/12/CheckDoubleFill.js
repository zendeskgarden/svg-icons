import * as React from 'react';

function SvgCheckDoubleFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 6l2 2 4-4m0 4l4-4"
      />
    </svg>
  );
}

export default SvgCheckDoubleFill;
