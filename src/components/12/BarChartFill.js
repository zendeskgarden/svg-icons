import * as React from 'react';

function SvgBarChartFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <rect width={3} height={4} y={7} rx={1} ry={1} />
        <rect width={3} height={7} x={4} y={4} rx={1} ry={1} />
        <rect width={3} height={10} x={8} y={1} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgBarChartFill;
