import * as React from 'react';

const SvgNumberStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M1.5 4.5H11m-10 3h9.5M8.5 1l-2 10m-1-10l-2 10"
    />
  </svg>
);

export default SvgNumberStroke;
