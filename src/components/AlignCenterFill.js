import * as React from 'react';

const SvgAlignCenterFill = props => (
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
      d="M2 1h8M4 4h4M2 7h8m-6 3h4"
    />
  </svg>
);

export default SvgAlignCenterFill;
