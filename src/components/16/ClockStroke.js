import * as React from 'react';

function SvgClockStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={8} cy={8} r={7.5} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3v5.5H11" />
      </g>
    </svg>
  );
}

export default SvgClockStroke;
