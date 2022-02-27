import * as React from 'react';

function SvgSmileSlightStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={8} cy={8} r={7.5} />
        <path strokeLinecap="round" d="M5.5 10.5a6.56 6.56 0 005 0" />
      </g>
      <g fill="currentColor">
        <circle cx={10} cy={6} r={1} />
        <circle cx={6} cy={6} r={1} />
      </g>
    </svg>
  );
}

export default SvgSmileSlightStroke;
