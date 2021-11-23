import * as React from 'react';

function SvgTextColorFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l3-7 3 7M4 6h4"
      />
      <path fill="currentColor" d="M2 10h8v2H2z" />
    </svg>
  );
}

export default SvgTextColorFill;
