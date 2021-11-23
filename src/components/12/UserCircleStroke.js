import * as React from 'react';

function SvgUserCircleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={6} cy={6} r={5.5} />
        <circle cx={6} cy={4} r={1.5} />
        <path strokeLinecap="round" d="M8.5 9C8.1 8.1 7 7.5 6 7.5S3.9 8.1 3.5 9" />
      </g>
    </svg>
  );
}

export default SvgUserCircleStroke;
