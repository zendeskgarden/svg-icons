import * as React from 'react';

function SvgCheckLgFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 7l3 3 7-7"
      />
    </svg>
  );
}

export default SvgCheckLgFill;
