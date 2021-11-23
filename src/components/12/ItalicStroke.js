import * as React from 'react';

function SvgItalicStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M5.5 1.5h2m-1 0l-2 10m-1 0h2"
      />
    </svg>
  );
}

export default SvgItalicStroke;
