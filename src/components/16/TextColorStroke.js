import * as React from 'react';

function SvgTextColorStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 11.5l4-10 4 10M5 8.5h5"
      />
      <path fill="currentColor" d="M2 13h11v3H2z" />
    </svg>
  );
}

export default SvgTextColorStroke;
