import * as React from 'react';

function SvgGrip(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <rect width={2} height={2} x={5} y={1} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={9} y={1} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={5} y={5} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={9} y={5} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={5} y={9} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={9} y={9} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={5} y={13} rx={0.5} ry={0.5} />
        <rect width={2} height={2} x={9} y={13} rx={0.5} ry={0.5} />
      </g>
    </svg>
  );
}

export default SvgGrip;
