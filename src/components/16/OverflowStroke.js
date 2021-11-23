import * as React from 'react';

function SvgOverflowStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <circle cx={2.5} cy={8} r={1.5} />
        <circle cx={8} cy={8} r={1.5} />
        <circle cx={13.5} cy={8} r={1.5} />
      </g>
    </svg>
  );
}

export default SvgOverflowStroke;
