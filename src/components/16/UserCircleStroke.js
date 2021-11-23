import * as React from 'react';

function SvgUserCircleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={8} cy={8} r={7.5} />
        <circle cx={8} cy={5.5} r={2} />
        <path strokeLinecap="round" d="M11.5 12c-.6-1.5-1.8-2.5-3.5-2.5s-2.9 1-3.5 2.5" />
      </g>
    </svg>
  );
}

export default SvgUserCircleStroke;
