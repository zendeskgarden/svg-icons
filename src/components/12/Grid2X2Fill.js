import * as React from 'react';

function SvgGrid2X2Fill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <rect width={5} height={5} rx={1} ry={1} />
        <rect width={5} height={5} y={7} rx={1} ry={1} />
        <rect width={5} height={5} x={7} rx={1} ry={1} />
        <rect width={5} height={5} x={7} y={7} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgGrid2X2Fill;
