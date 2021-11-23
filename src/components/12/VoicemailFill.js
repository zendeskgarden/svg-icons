import * as React from 'react';

function SvgVoicemailFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx={2.8} cy={5.2} r={1.8} />
        <circle cx={9.2} cy={5.2} r={1.8} />
        <path d="M2.5 7h7" />
      </g>
    </svg>
  );
}

export default SvgVoicemailFill;
