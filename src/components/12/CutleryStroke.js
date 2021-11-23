import * as React from 'react';

function SvgCutleryStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M.5 3.5h4v-3 5a2 2 0 11-4 0v-5 3zm2 8v-4 4zm0-8v-3 3zm8-3v11h-1v-4h1-3v-4a3 3 0 013-3z"
      />
    </svg>
  );
}

export default SvgCutleryStroke;
