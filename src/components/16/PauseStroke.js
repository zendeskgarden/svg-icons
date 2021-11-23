import * as React from 'react';

function SvgPauseStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5 2v12m6-12v12"
      />
    </svg>
  );
}

export default SvgPauseStroke;
