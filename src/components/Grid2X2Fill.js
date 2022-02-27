import * as React from 'react';

function SvgGrid2X2Fill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <rect width={7} height={7} rx={1} ry={1} />
        <rect width={7} height={7} y={9} rx={1} ry={1} />
        <rect width={7} height={7} x={9} rx={1} ry={1} />
        <rect width={7} height={7} x={9} y={9} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgGrid2X2Fill;
