import * as React from 'react';

function SvgCalendarStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={11} height={9} x={0.5} y={2.5} rx={0.5} ry={0.5} />
        <path strokeLinecap="round" strokeWidth={2} d="M3 4V1m6 3V1" />
      </g>
    </svg>
  );
}

export default SvgCalendarStroke;
