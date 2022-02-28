import * as React from 'react';

const SvgVoicemailStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <circle cx={2.5} cy={5.5} r={2} />
      <circle cx={9.5} cy={5.5} r={2} />
      <path d="M2.5 7.5h7" />
    </g>
  </svg>
);

export default SvgVoicemailStroke;
