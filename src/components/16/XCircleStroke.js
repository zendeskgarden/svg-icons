import * as React from 'react';

function SvgXCircleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={7.5} cy={8.5} r={7} />
        <path strokeLinecap="round" d="M4.5 11.5l6-6m0 6l-6-6" />
      </g>
    </svg>
  );
}

export default SvgXCircleStroke;
