import * as React from 'react';

const SvgUserListStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={4} cy={3.5} r={2} />
      <path
        strokeLinecap="round"
        d="M7.5 10.5c-.2-1.7-1.7-3-3.5-3S.7 8.8.5 10.5m7.5-7h3.5m-3 3h3m-1.5 3h1.5"
      />
    </g>
  </svg>
);

export default SvgUserListStroke;
