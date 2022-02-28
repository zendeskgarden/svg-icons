import * as React from 'react';

const SvgTextColorStroke = props => (
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
      strokeLinejoin="round"
      d="M2.5 8.5l3-7 3 7m-5-2h4"
    />
    <path fill="currentColor" d="M2 10h7v2H2z" />
  </svg>
);

export default SvgTextColorStroke;
