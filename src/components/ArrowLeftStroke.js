import * as React from 'react';

const SvgArrowLeftStroke = props => (
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
      d="M4 3L.9 6.1c-.2.2-.2.5 0 .7L4 10M1 6.5h10.5"
    />
  </svg>
);

export default SvgArrowLeftStroke;
