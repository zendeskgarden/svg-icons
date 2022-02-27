import * as React from 'react';

function SvgInboxStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={13} height={15} x={1.5} y={0.5} rx={0.5} ry={0.5} />
        <path
          strokeLinecap="round"
          d="M1.5 10.5h3V12a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1.5h3m-10-7h7m-7 2h7m-7 2h7"
        />
      </g>
    </svg>
  );
}

export default SvgInboxStroke;
