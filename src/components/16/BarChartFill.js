import * as React from 'react';

function SvgBarChartFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <rect width={4} height={7} y={9} rx={1} ry={1} />
        <rect width={4} height={11} x={6} y={5} rx={1} ry={1} />
        <rect width={4} height={15} x={12} y={1} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgBarChartFill;
