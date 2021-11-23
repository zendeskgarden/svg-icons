import * as React from 'react';

function SvgCheckCircleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6l2 2L9 4.5" />
        <circle cx={6} cy={6} r={5.5} />
      </g>
    </svg>
  );
}

export default SvgCheckCircleStroke;
