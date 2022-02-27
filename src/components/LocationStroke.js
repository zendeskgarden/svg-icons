import * as React from 'react';

function SvgLocationStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={8} cy={6.5} r={2} />
        <path
          strokeLinejoin="round"
          d="M8 .5a5.9 5.9 0 00-6 5.83c0 2.17 1 3.3 2.19 4.89s2.64 3 3.8 4.28c1.17-1.31 2.62-2.76 3.81-4.28S14 8.5 14 6.33A6.19 6.19 0 008 .5z"
        />
      </g>
    </svg>
  );
}

export default SvgLocationStroke;
