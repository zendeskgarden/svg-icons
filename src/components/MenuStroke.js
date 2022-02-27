import * as React from 'react';

function SvgMenuStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.5 3.5h13m-13 4h13m-13 4h13"
      />
    </svg>
  );
}

export default SvgMenuStroke;
