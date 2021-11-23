import * as React from 'react';

function SvgLockLockedStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <path d="M3.5 5.5V3a2.5 2.5 0 015 0v2.5" />
        <rect width={9} height={6} x={1.5} y={5.5} rx={0.5} ry={0.5} />
      </g>
    </svg>
  );
}

export default SvgLockLockedStroke;
