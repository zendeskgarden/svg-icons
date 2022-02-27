import * as React from 'react';

function SvgSearch(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
        <circle cx={11} cy={11} r={7} />
        <path d="M16 16l6 6" />
      </g>
    </svg>
  );
}

export default SvgSearch;
