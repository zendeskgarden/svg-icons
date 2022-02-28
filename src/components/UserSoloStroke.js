import * as React from 'react';

const SvgUserSoloStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={6} cy={3} r={2.5} />
      <path strokeLinecap="round" d="M1.5 11.5c.2-2.3 2.2-4 4.5-4s4.3 1.7 4.5 4" />
    </g>
  </svg>
);

export default SvgUserSoloStroke;
