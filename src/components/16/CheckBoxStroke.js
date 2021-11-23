import * as React from 'react';

function SvgCheckBoxStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={13} height={13} x={1.5} y={1.5} rx={0.5} ry={0.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 8.5L7 11l5-5" />
      </g>
    </svg>
  );
}

export default SvgCheckBoxStroke;
