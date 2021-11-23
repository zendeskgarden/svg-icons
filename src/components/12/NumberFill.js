import * as React from 'react';

function SvgNumberFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M1.5 4H11M1 8h9.5M9 1L7 11M5 1L3 11"
      />
    </svg>
  );
}

export default SvgNumberFill;
