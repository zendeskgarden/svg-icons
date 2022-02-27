import * as React from 'react';

function SvgNumberFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2.5 5.5h12m-13 5h12m-1.5-9l-3 13m-2-13l-3 13"
      />
    </svg>
  );
}

export default SvgNumberFill;
