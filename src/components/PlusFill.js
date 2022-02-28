import * as React from 'react';

const SvgPlusFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 2v8m4-4H2" />
  </svg>
);

export default SvgPlusFill;
