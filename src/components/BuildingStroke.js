import * as React from 'react';

const SvgBuildingStroke = props => (
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
      d="M10 .5H2c-.3 0-.5.2-.5.5v10c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V9c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5V1c0-.3-.2-.5-.5-.5z"
    />
    <path fill="currentColor" d="M3 5h2v2H3zm4 0h2v2H7zM3 2h2v2H3zm4 0h2v2H7z" />
  </svg>
);

export default SvgBuildingStroke;
