import * as React from 'react';

function SvgRearrangeFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <rect width={10} height={3} rx={1} ry={1} />
        <rect width={10} height={3} x={2} y={4} rx={1} ry={1} />
        <rect width={10} height={3} y={8} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgRearrangeFill;
