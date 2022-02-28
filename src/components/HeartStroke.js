import * as React from 'react';

function SvgHeartStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M11.5 1.5c-1.5 0-2.8.9-3.5 2.1-.7-1.2-2-2.1-3.5-2.1-2.2 0-4 1.8-4 4 0 .7.2 1.4.5 2 2 3.5 7 8 7 8s5-4.5 7-8c.3-.6.5-1.3.5-2 0-2.2-1.8-4-4-4z"
      />
    </svg>
  );
}

export default SvgHeartStroke;
