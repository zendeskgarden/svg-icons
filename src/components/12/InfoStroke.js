import * as React from 'react';

function SvgInfoStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g stroke="currentColor">
        <circle cx={5.5} cy={6.5} r={5} fill="none" />
        <path strokeLinecap="round" d="M5.5 9.5v-3" />
      </g>
      <circle cx={5.5} cy={4} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgInfoStroke;
