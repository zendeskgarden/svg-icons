import * as React from 'react';

const SvgGrip = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="currentColor">
      <rect width={2} height={2} x={3} y={1} rx={0.5} ry={0.5} />
      <rect width={2} height={2} x={7} y={1} rx={0.5} ry={0.5} />
      <rect width={2} height={2} x={3} y={5} rx={0.5} ry={0.5} />
      <rect width={2} height={2} x={7} y={5} rx={0.5} ry={0.5} />
      <rect width={2} height={2} x={3} y={9} rx={0.5} ry={0.5} />
      <rect width={2} height={2} x={7} y={9} rx={0.5} ry={0.5} />
    </g>
  </svg>
);

export default SvgGrip;
