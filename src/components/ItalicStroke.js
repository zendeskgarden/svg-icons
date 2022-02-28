import * as React from 'react';

const SvgItalicStroke = props => (
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
      d="M5.5 1.5h2m-1 0l-2 10m-1 0h2"
    />
  </svg>
);

export default SvgItalicStroke;
