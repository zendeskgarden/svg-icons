import * as React from 'react';

function SvgUserSoloStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <circle cx={8} cy={5} r={3.5} />
        <path strokeLinecap="round" d="M2.5 15.5c.3-2.8 2.6-5 5.5-5s5.2 2.2 5.5 5" />
      </g>
    </svg>
  );
}

export default SvgUserSoloStroke;
