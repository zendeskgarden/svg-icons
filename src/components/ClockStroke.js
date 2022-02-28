import * as React from 'react';

const SvgClockStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={6} cy={6} r={5.5} />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 3v3.5H8" />
    </g>
  </svg>
);

export default SvgClockStroke;
