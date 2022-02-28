import * as React from 'react';

const SvgEyeStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={6} cy={6} r={1.5} />
      <path
        strokeLinejoin="round"
        d="M11.38 6.37c.16-.22.16-.52 0-.75-.63-.9-2.5-3.12-5.38-3.12S1.25 4.72.62 5.63c-.16.22-.16.52 0 .75.63.9 2.5 3.12 5.38 3.12s4.75-2.22 5.38-3.13z"
      />
    </g>
  </svg>
);

export default SvgEyeStroke;
