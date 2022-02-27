import * as React from 'react';

function SvgHeadingFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 1v14M13 1v14M3 8h10"
      />
    </svg>
  );
}

export default SvgHeadingFill;
