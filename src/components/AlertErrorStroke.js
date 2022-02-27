import * as React from 'react';

function SvgAlertErrorStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={7.5} cy={8.5} r={7} />
        <path strokeLinecap="round" d="M7.5 4.5V9" />
      </g>
      <circle cx={7.5} cy={12} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgAlertErrorStroke;
