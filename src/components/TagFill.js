import * as React from 'react';

const SvgTagFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.5 6.29l-6-6C5.31.11 5.06 0 4.79 0H1C.45 0 0 .45 0 1v3.79c0 .27.11.52.29.71l6 6c.19.2.45.29.71.29s.51-.1.71-.29l3.79-3.79c.39-.39.39-1.03 0-1.42zM3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  </svg>
);

export default SvgTagFill;
