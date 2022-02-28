import * as React from 'react';

const SvgLifesaverStroke = props => (
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
      <circle cx={6} cy={6} r={2.5} />
      <path d="M8 8l2 2M2 2l2 2m0 4l-2 2m8-8L8 4" />
    </g>
  </svg>
);

export default SvgLifesaverStroke;
