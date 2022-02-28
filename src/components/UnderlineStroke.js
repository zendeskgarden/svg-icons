import * as React from 'react';

const SvgUnderlineStroke = props => (
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
      d="M1.5 11.5h8m-7-10v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5"
    />
  </svg>
);

export default SvgUnderlineStroke;
