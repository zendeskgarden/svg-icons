import * as React from 'react';

const SvgArrowReverseStroke = props => (
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
      d="M7 1L.5 7.5m11-3L5 11M3.5.5H7c.3 0 .5.2.5.5v3.5m1 7H5c-.3 0-.5-.2-.5-.5V7.5"
    />
  </svg>
);

export default SvgArrowReverseStroke;
