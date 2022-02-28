import * as React from 'react';

const SvgOverflowFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="currentColor">
      <circle cx={1.5} cy={6} r={1.5} />
      <circle cx={10.5} cy={6} r={1.5} />
      <circle cx={6} cy={6} r={1.5} />
    </g>
  </svg>
);

export default SvgOverflowFill;
