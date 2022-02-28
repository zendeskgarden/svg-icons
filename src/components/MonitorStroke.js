import * as React from 'react';

const SvgMonitorStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <rect width={11} height={7} x={0.5} y={0.5} rx={0.5} ry={0.5} />
      <path strokeLinecap="round" d="M8.5 11.5a2.56 2.56 0 00-5 0" />
    </g>
  </svg>
);

export default SvgMonitorStroke;
