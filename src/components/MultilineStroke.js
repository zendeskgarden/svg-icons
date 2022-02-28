import * as React from 'react';

const SvgMultilineStroke = props => (
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
      d="M1.5 4.5h9m-9-3h9m-9 6h9m-9 3h4"
    />
  </svg>
);

export default SvgMultilineStroke;
