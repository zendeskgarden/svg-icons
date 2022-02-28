import * as React from 'react';

const SvgPlusCircleStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <circle cx={5.5} cy={6.5} r={5} fill="none" stroke="currentColor" />
    <path fill="none" stroke="currentColor" strokeLinecap="round" d="M5.5 3.5v6m3-3h-6" />
  </svg>
);

export default SvgPlusCircleStroke;
