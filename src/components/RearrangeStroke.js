import * as React from 'react';

const SvgRearrangeStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M1 2h8m-8 8h8M3 6h8" />
  </svg>
);

export default SvgRearrangeStroke;
