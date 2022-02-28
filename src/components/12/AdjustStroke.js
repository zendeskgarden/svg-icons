import * as React from 'react';

function SvgAdjustStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={8.5} cy={7} r={1.5} />
        <circle cx={3.5} cy={5} r={1.5} />
        <path strokeLinecap="round" d="M3.5.5v1m0 7v3m5-11v3m0 7v1" />
      </g>
    </svg>
  );
}

export default SvgAdjustStroke;
