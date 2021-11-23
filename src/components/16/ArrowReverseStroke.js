import * as React from 'react';

function SvgArrowReverseStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M1 10l9-9M6 15l9-9M4.5.5H10c.3 0 .5.2.5.5v5.5m1 9H6c-.3 0-.5-.2-.5-.5V9.5"
      />
    </svg>
  );
}

export default SvgArrowReverseStroke;
