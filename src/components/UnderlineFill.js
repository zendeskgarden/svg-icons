import * as React from 'react';

const SvgUnderlineFill = props => (
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
      d="M3 11h6M3 1v4c0 1.7 1.3 3 3 3s3-1.3 3-3V1"
    />
  </svg>
);

export default SvgUnderlineFill;
