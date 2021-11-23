import * as React from 'react';

function SvgOverflowStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <circle cx={2} cy={6} r={1} />
        <circle cx={10} cy={6} r={1} />
        <circle cx={6} cy={6} r={1} />
      </g>
    </svg>
  );
}

export default SvgOverflowStroke;
