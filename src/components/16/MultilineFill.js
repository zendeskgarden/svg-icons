import * as React from 'react';

function SvgMultilineFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 6h12M2 2h12M2 10h12M2 14h6"
      />
    </svg>
  );
}

export default SvgMultilineFill;
