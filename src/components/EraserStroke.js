import * as React from 'react';

function SvgEraserStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect
          width={14.142}
          height={7.071}
          x={0.929}
          y={4.465}
          rx={0.5}
          ry={0.5}
          transform="rotate(-45 8 8)"
        />
        <path strokeLinecap="round" d="M5.577 5.577l4.673 4.673M8.5 15.5h7" />
      </g>
    </svg>
  );
}

export default SvgEraserStroke;
