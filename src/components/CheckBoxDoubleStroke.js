import * as React from 'react';

function SvgCheckBoxDoubleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={11} height={11} x={1.5} y={1.5} rx={0.5} ry={0.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 6.5L6 9l4.5-4.5m-6 10H14a.5.5 0 00.5-.5V4.5"
        />
      </g>
    </svg>
  );
}

export default SvgCheckBoxDoubleStroke;
