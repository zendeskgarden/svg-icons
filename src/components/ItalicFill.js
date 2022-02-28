import * as React from 'react';

const SvgItalicFill = props => (
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
      d="M5.5 1h3M7 1L5 11m-1.5 0h3"
    />
  </svg>
);

export default SvgItalicFill;
