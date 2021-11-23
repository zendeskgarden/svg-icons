import * as React from 'react';

function SvgPauseStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 2v8m4-8v8"
      />
    </svg>
  );
}

export default SvgPauseStroke;
