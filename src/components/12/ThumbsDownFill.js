import * as React from 'react';

function SvgThumbsDownFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <path d="M5.5 12A1.46 1.46 0 014 10.5V8H1.23A1.24 1.24 0 010 6.77C.2 2 .77 0 2 0h5a1 1 0 011 1v6.5a.5.5 0 01-.28.45S7 8.43 7 10.5A1.46 1.46 0 015.5 12z" />
        <rect width={3} height={8} x={9} rx={1} ry={1} />
      </g>
    </svg>
  );
}

export default SvgThumbsDownFill;
