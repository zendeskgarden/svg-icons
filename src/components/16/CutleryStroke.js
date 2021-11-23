import * as React from 'react';

function SvgCutleryStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M6.5.5v7a2 2 0 11-4 0v-7 4h4v-4zm-2 4v-4 4zm0 11v-6 6zm9-15v15h-1v-5h1-4v-6a4 4 0 014-4z"
      />
    </svg>
  );
}

export default SvgCutleryStroke;
