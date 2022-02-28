import * as React from 'react';

const SvgXStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path stroke="currentColor" strokeLinecap="round" d="M3 9l6-6m0 6L3 3" />
  </svg>
);

export default SvgXStroke;
