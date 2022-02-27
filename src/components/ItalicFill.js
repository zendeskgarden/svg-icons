import * as React from 'react';

function SvgItalicFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 1h3M9.5 1l-3 14M5 15h3"
      />
    </svg>
  );
}

export default SvgItalicFill;
