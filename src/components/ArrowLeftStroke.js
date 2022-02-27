import * as React from 'react';

function SvgArrowLeftStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M1 8.5h14.5m-10-5L.9 8.1c-.2.2-.2.5 0 .7l4.6 4.6"
      />
    </svg>
  );
}

export default SvgArrowLeftStroke;
