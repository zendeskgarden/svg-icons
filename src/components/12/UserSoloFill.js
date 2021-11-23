import * as React from 'react';

function SvgUserSoloFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <circle cx={6} cy={3} r={3} />
        <path d="M6 7a5 5 0 00-5 4.42.51.51 0 00.5.58h8.94a.51.51 0 00.5-.58A5 5 0 006 7z" />
      </g>
    </svg>
  );
}

export default SvgUserSoloFill;
