import * as React from 'react';

function SvgAdjustFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M4.5.5v2m0 8v5m7-15v5m0 8v2"
      />
      <g fill="currentColor">
        <circle cx={4.5} cy={6.5} r={2.5} />
        <circle cx={11.5} cy={9.5} r={2.5} />
      </g>
    </svg>
  );
}

export default SvgAdjustFill;
