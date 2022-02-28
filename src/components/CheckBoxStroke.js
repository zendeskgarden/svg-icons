import * as React from 'react';

const SvgCheckBoxStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <rect width={11} height={11} x={0.5} y={0.5} rx={0.5} ry={0.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.5l2 2 4-4" />
    </g>
  </svg>
);

export default SvgCheckBoxStroke;
