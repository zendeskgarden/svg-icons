import * as React from 'react';

const SvgUserGroupStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={3} cy={2} r={1.5} />
      <circle cx={8} cy={4.5} r={2} />
      <path
        strokeLinecap="round"
        d="M11.5 11.5c-.2-1.7-1.7-3-3.5-3s-3.3 1.3-3.5 3m-4-4c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2"
      />
    </g>
  </svg>
);

export default SvgUserGroupStroke;
