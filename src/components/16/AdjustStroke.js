import * as React from 'react';

function SvgAdjustStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={4.5} cy={6.5} r={2} />
        <circle cx={11.5} cy={9.5} r={2} />
        <path strokeLinecap="round" d="M4.5.5v2m0 8v5m7-15v5m0 8v2" />
      </g>
    </svg>
  );
}

export default SvgAdjustStroke;
