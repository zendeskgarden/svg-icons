import * as React from 'react';

function SvgHeadingFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 1v10M9 1v10M3 6h6"
      />
    </svg>
  );
}

export default SvgHeadingFill;
