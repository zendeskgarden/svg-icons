import * as React from 'react';

function SvgLockLockedStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={11} height={8} x={2.5} y={7.5} rx={0.5} ry={0.5} />
        <path d="M4.5 7.5V4a3.5 3.5 0 017 0v3.5" />
      </g>
    </svg>
  );
}

export default SvgLockLockedStroke;
