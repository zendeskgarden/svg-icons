import * as React from 'react';

const SvgMonitorFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="currentColor">
      <rect width={12} height={8} rx={1} ry={1} />
      <path d="M6 9a3 3 0 00-2.9 2.4.5.5 0 00.5.6h4.8a.5.5 0 00.5-.6A3 3 0 006 9z" />
    </g>
  </svg>
);

export default SvgMonitorFill;
