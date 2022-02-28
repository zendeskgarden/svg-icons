import * as React from 'react';

const SvgMenuFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M2 2h8M2 6h8m-8 4h8" />
  </svg>
);

export default SvgMenuFill;
