import * as React from 'react';

function SvgAtStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M8.5 3.5V6h0A2.5 2.5 0 016 8.5h0A2.5 2.5 0 013.5 6h0A2.5 2.5 0 016 3.5h0A2.5 2.5 0 018.5 6h0v1A1.5 1.5 0 0010 8.5h0A1.5 1.5 0 0011.5 7V6h0A5.5 5.5 0 006 .5h0A5.5 5.5 0 00.5 6h0A5.5 5.5 0 006 11.5h2.5"
      />
    </svg>
  );
}

export default SvgAtStroke;
