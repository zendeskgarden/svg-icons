import * as React from 'react';

const SvgFileGenericFill = props => (
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
      d="M7 2.5v-2c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4.5c0-.28-.22-.5-.5-.5h-2C7.67 4 7 3.33 7 2.5zm1-2V2c0 .55.45 1 1 1h1.5c.45 0 .67-.54.35-.85l-2-2C8.54-.17 8 .06 8 .5z"
    />
  </svg>
);

export default SvgFileGenericFill;
