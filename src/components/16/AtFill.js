import * as React from 'react';

function SvgAtFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11 5v3h0a3 3 0 01-3 3h0a3 3 0 01-3-3h0a3 3 0 013-3h0a3 3 0 013 3h0v1a2 2 0 002 2h0a2 2 0 002-2V8h0a7 7 0 00-7-7h0a7 7 0 00-7 7h0a7 7 0 007 7h2.8"
      />
    </svg>
  );
}

export default SvgAtFill;
