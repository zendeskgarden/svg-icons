import * as React from 'react';

const SvgPauseStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M4 2v8m4-8v8"
    />
  </svg>
);

export default SvgPauseStroke;
