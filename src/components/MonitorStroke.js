import * as React from 'react';

function SvgMonitorStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={15} height={10} x={0.5} y={0.5} rx={0.5} ry={0.5} />
        <path strokeLinecap="round" d="M11.5 15.5a3.54 3.54 0 00-7 0" />
      </g>
    </svg>
  );
}

export default SvgMonitorStroke;
