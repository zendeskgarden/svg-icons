import * as React from 'react';

function SvgUserSoloFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <circle cx={8} cy={5} r={4} />
        <path d="M8 10a6 6 0 00-6 5.47.5.5 0 00.5.53h10.97a.5.5 0 00.5-.53A6 6 0 008 10z" />
      </g>
    </svg>
  );
}

export default SvgUserSoloFill;
