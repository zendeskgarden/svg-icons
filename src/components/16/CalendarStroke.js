import * as React from 'react';

function SvgCalendarStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={15} height={13} x={0.5} y={2.5} rx={0.5} ry={0.5} />
        <path strokeLinecap="round" strokeWidth={2} d="M4.01 1.05v3m7.99-3v3" />
      </g>
    </svg>
  );
}

export default SvgCalendarStroke;
