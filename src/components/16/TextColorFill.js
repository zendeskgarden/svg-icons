import * as React from 'react';

function SvgTextColorFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 11L8 1l4 10M5.5 8h5"
      />
      <path fill="currentColor" d="M2 13h12v3H2z" />
    </svg>
  );
}

export default SvgTextColorFill;
