import * as React from 'react';

const SvgSearchStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <circle cx={4.5} cy={4.5} r={4} fill="none" stroke="currentColor" />
    <path stroke="currentColor" strokeLinecap="round" d="M11 11L7.5 7.5" />
  </svg>
);

export default SvgSearchStroke;
