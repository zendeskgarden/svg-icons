import * as React from 'react';

function SvgUnderlineFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 15h10M4 1v7c0 2.2 1.8 4 4 4s4-1.8 4-4V1"
      />
    </svg>
  );
}

export default SvgUnderlineFill;
