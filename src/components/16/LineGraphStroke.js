import * as React from 'react';

function SvgLineGraphStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={15} height={13} x={0.5} y={1.5} rx={0.5} ry={0.5} />
        <path strokeLinejoin="round" d="M.5 12.5l3-4.5 2 3 4-6 3 4.5 3-4.5" />
      </g>
    </svg>
  );
}

export default SvgLineGraphStroke;
