import * as React from 'react';

function SvgTableFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <rect
        width={11}
        height={11}
        x={0.5}
        y={0.5}
        fill="none"
        stroke="currentColor"
        rx={0.5}
        ry={0.5}
      />
      <path
        fill="currentColor"
        d="M.5.5h11V3H.5zM.5 5h11v1H.5zm0 3h11v1H.5zM3 2.5h1v9H3zm3 0h1v9H6z"
      />
    </svg>
  );
}

export default SvgTableFill;
