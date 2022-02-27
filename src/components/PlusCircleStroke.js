import * as React from 'react';

function SvgPlusCircleStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <circle cx={7.5} cy={8.5} r={7} fill="none" stroke="currentColor" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M7.5 4.5v8m4-4h-8" />
    </svg>
  );
}

export default SvgPlusCircleStroke;
