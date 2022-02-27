import * as React from 'react';

function SvgItalicStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M7.5 1.5h3M9 1.5l-3 14m-1.5 0h3"
      />
    </svg>
  );
}

export default SvgItalicStroke;
