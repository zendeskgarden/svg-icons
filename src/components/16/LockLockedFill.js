import * as React from 'react';

function SvgLockLockedFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <rect width={12} height={9} x={2} y={7} fill="currentColor" rx={1} ry={1} />
      <path fill="none" stroke="currentColor" d="M4.5 7.5V4a3.5 3.5 0 017 0v3.5" />
    </svg>
  );
}

export default SvgLockLockedFill;
