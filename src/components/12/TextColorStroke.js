import * as React from 'react';

function SvgTextColorStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 8.5l3-7 3 7m-5-2h4"
      />
      <path fill="currentColor" d="M2 10h7v2H2z" />
    </svg>
  );
}

export default SvgTextColorStroke;
