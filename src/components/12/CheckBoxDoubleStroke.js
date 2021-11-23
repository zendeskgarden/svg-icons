import * as React from 'react';

function SvgCheckBoxDoubleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={9} height={9} x={0.5} y={0.5} rx={0.5} ry={0.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 5.5L4 7l3.5-3.5m-5 8H11a.5.5 0 00.5-.5V2.5"
        />
      </g>
    </svg>
  );
}

export default SvgCheckBoxDoubleStroke;
