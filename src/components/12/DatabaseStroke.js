import * as React from 'react';

function SvgDatabaseStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <ellipse cx={6} cy={2} rx={4.5} ry={1.5} />
        <path d="M1.5 2v8c0 .8 2 1.5 4.5 1.5s4.5-.7 4.5-1.5V2m0 5.3c0 .8-2 1.5-4.5 1.5s-4.5-.6-4.5-1.5m9-2.6c0 .8-2 1.5-4.5 1.5s-4.5-.7-4.5-1.5" />
      </g>
    </svg>
  );
}

export default SvgDatabaseStroke;
