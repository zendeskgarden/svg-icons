import * as React from 'react';

function SvgInboxStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={9} height={11} x={1.5} y={0.5} rx={0.5} ry={0.5} />
        <path
          strokeLinecap="round"
          d="M1.5 8.5h2V9a.49.49 0 00.5.5h4a.49.49 0 00.5-.5v-.5h2M4 2.5h4m-4 2h4m-4 2h4"
        />
      </g>
    </svg>
  );
}

export default SvgInboxStroke;
