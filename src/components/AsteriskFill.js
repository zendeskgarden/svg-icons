import * as React from 'react';

const SvgAsteriskFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 1v10M1.5 3.5l9 5m-9 0l9-5"
    />
  </svg>
);

export default SvgAsteriskFill;
