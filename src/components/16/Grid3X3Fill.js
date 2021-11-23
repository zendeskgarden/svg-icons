import * as React from 'react';

function SvgGrid3X3Fill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <rect width={4} height={4} x={1} y={1} rx={1} ry={1} />
        <rect width={4} height={4} x={1} y={6} rx={1} ry={1} />
        <rect width={4} height={4} x={1} y={11} rx={1} ry={1} />
        <rect width={4} height={4} x={6} y={11} rx={1} ry={1} />
        <rect width={4} height={4} x={6} y={6} rx={1} ry={1} />
        <rect width={4} height={4} x={11} y={6} rx={1} ry={1} />
        <rect width={4} height={4} x={11} y={11} rx={1} ry={1} />
        <rect width={4} height={4} x={6} y={1} rx={1} ry={1} />
        <rect width={4} height={4} x={11} y={1} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgGrid3X3Fill;
