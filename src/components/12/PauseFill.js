import * as React from 'react';

function SvgPauseFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <rect width={3} height={10} x={2} y={1} rx={1} ry={1} />
        <rect width={3} height={10} x={7} y={1} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgPauseFill;
