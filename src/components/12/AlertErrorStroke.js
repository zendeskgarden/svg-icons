import * as React from 'react';

function SvgAlertErrorStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={5.5} cy={6.5} r={5} />
        <path strokeLinecap="round" d="M5.5 3.5v3" />
      </g>
      <circle cx={5.5} cy={9} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgAlertErrorStroke;
