import * as React from 'react';

const SvgTextColorFill = props => (
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
      d="M3 8l3-7 3 7M4 6h4"
    />
    <path fill="currentColor" d="M2 10h8v2H2z" />
  </svg>
);

export default SvgTextColorFill;
