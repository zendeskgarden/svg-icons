import * as React from 'react';

const SvgXFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3.5 8.5l5-5m0 5l-5-5" />
  </svg>
);

export default SvgXFill;
