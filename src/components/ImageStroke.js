import * as React from 'react';

const SvgImageStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <rect width={11} height={9} x={0.5} y={1.5} rx={0.5} ry={0.5} />
      <path d="M.5 10.5l3.65-3.65a.5.5 0 01.71 0l1.79 1.8a.5.5 0 00.71 0l.79-.79a.5.5 0 01.71 0L11 10" />
    </g>
    <circle cx={8} cy={4} r={1} fill="currentColor" />
  </svg>
);

export default SvgImageStroke;
