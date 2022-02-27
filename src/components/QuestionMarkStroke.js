import * as React from 'react';

function SvgQuestionMarkStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <circle cx={7.5} cy={13.5} r={1} fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M7.5 10.5V9.4c0-1 .6-1.8 1.4-2.3 1.1-.6 1.8-1.8 1.6-3.1-.3-1.3-1.2-2.2-2.5-2.5-1.5-.3-2.9.6-3.4 2"
      />
    </svg>
  );
}

export default SvgQuestionMarkStroke;
