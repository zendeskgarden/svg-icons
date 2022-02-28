import * as React from 'react';

const SvgHeartFill = props => (
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
      d="M6 12c-.12 0-.24-.04-.34-.13C5.08 11.34 0 6.65 0 4 0 1.58 1.76.5 3.5.5c1 0 1.88.4 2.5 1.12C6.62.9 7.5.5 8.5.5 10.24.5 12 1.58 12 4c0 2.65-5.08 7.34-5.66 7.87-.1.09-.22.13-.34.13z"
    />
  </svg>
);

export default SvgHeartFill;
