import * as React from 'react';

const SvgSearchFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <circle cx={4.5} cy={4.5} r={3.5} fill="none" stroke="currentColor" strokeWidth={2} />
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M11 11L7.5 7.5" />
  </svg>
);

export default SvgSearchFill;
