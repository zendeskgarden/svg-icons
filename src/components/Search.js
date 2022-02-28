import * as React from 'react';

const SvgSearch = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    focusable="false"
    viewBox="0 0 26 26"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
      <circle cx={11} cy={11} r={7} />
      <path d="M16 16l6 6" />
    </g>
  </svg>
);

export default SvgSearch;
