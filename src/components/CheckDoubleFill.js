import * as React from 'react';

const SvgCheckDoubleFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
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

export default SvgCheckDoubleFill;
