import * as React from 'react';

function SvgMultilineFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 4h8M2 1h8M2 7h8m-8 3h3.5"
      />
    </svg>
  );
}

export default SvgMultilineFill;
