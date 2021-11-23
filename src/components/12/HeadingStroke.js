import * as React from 'react';

function SvgHeadingStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M2.5 1.5v10m6-10v10m-6-5h6"
      />
    </svg>
  );
}

export default SvgHeadingStroke;
