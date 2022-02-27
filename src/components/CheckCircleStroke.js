import * as React from 'react';

function SvgCheckCircleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9l2.5 2.5 5-5" />
        <circle cx={7.5} cy={8.5} r={7} />
      </g>
    </svg>
  );
}

export default SvgCheckCircleStroke;
