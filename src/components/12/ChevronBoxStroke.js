import * as React from 'react';

function SvgChevronBoxStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={11} height={9} x={0.5} y={1.5} rx={0.5} ry={0.5} />
        <path strokeLinecap="round" d="M3.5 5l2.15 2.15a.5.5 0 00.71 0L8.5 5" />
      </g>
    </svg>
  );
}

export default SvgChevronBoxStroke;
