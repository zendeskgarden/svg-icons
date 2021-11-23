import * as React from 'react';

function SvgLifesaverStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={6} cy={6} r={5.5} />
        <circle cx={6} cy={6} r={2.5} />
        <path d="M8 8l2 2M2 2l2 2m0 4l-2 2m8-8L8 4" />
      </g>
    </svg>
  );
}

export default SvgLifesaverStroke;
