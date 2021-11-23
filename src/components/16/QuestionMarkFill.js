import * as React from 'react';

function SvgQuestionMarkFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <circle cx={8} cy={14} r={1.5} fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 10.5V9.4c0-1 .6-1.8 1.4-2.3 1.1-.6 1.8-1.8 1.6-3.1-.2-1.2-1.2-2.2-2.4-2.4-1.6-.3-3 .6-3.4 1.9"
      />
    </svg>
  );
}

export default SvgQuestionMarkFill;
