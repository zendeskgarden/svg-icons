import * as React from 'react';

const SvgXCircleStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g stroke="currentColor">
      <circle cx={5.5} cy={6.5} r={5} fill="none" />
      <path strokeLinecap="round" d="M3.5 8.5l4-4m0 4l-4-4" />
    </g>
  </svg>
);

export default SvgXCircleStroke;
