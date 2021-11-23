import * as React from 'react';

function SvgGlobeStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={6} cy={6} r={5.5} />
        <path d="M3.5 4.5v3m5-3v3m-7.8-3h10.6M.7 7.5h10.6M6 .5l-2.5 4M6 .5l2.5 4m-2.5 7l-2.5-4m2.5 4l2.5-4" />
      </g>
    </svg>
  );
}

export default SvgGlobeStroke;
