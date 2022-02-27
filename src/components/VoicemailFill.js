import * as React from 'react';

function SvgVoicemailFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx={3.5} cy={7.5} r={2.5} />
        <circle cx={12.5} cy={7.5} r={2.5} />
        <path d="M3.5 10h9" />
      </g>
    </svg>
  );
}

export default SvgVoicemailFill;
