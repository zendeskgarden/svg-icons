import * as React from 'react';

const SvgAtFill = props => (
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
      strokeWidth={2}
      d="M8 4v2h0a2 2 0 01-2 2h0a2 2 0 01-2-2h0a2 2 0 012-2h0a2 2 0 012 2h0v.5A1.5 1.5 0 009.5 8h0A1.5 1.5 0 0011 6.5V6h0a5 5 0 00-5-5h0a5 5 0 00-5 5h0a5 5 0 005 5h2"
    />
  </svg>
);

export default SvgAtFill;
