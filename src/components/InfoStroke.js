import * as React from 'react';

function SvgInfoStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g stroke="currentColor">
        <circle cx={7.5} cy={8.5} r={7} fill="none" />
        <path strokeLinecap="round" d="M7.5 12.5V8" />
      </g>
      <circle cx={7.5} cy={5} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgInfoStroke;
