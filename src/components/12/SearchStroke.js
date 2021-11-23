import * as React from 'react';

function SvgSearchStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <circle cx={4.5} cy={4.5} r={4} fill="none" stroke="currentColor" />
      <path stroke="currentColor" strokeLinecap="round" d="M11 11L7.5 7.5" />
    </svg>
  );
}

export default SvgSearchStroke;
