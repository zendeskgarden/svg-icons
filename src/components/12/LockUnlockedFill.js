import * as React from 'react';

function SvgLockUnlockedFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M3.5 5.5V3a2.5 2.5 0 015 0v.5"
      />
      <rect width={10} height={7} x={1} y={5} fill="currentColor" rx={1} ry={1} />
    </svg>
  );
}

export default SvgLockUnlockedFill;
