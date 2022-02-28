import * as React from 'react';

const SvgMobilePhoneStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <rect
      width={7}
      height={11}
      x={2.5}
      y={0.5}
      fill="none"
      stroke="currentColor"
      rx={0.5}
      ry={0.5}
    />
    <path
      fill="currentColor"
      d="M2.5.5h7V2h-7zm0 8.5v2.5h7V9h-7zM7 11H5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5z"
    />
  </svg>
);

export default SvgMobilePhoneStroke;
