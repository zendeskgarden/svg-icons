import * as React from 'react';

function SvgSearchFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <circle cx={6} cy={6} r={5} fill="none" stroke="currentColor" strokeWidth={2} />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M15 15l-5-5" />
    </svg>
  );
}

export default SvgSearchFill;
