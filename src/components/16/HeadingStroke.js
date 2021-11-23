import * as React from 'react';

function SvgHeadingStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M2.5 1.5v14m10-14v14m-10-7h10"
      />
    </svg>
  );
}

export default SvgHeadingStroke;
