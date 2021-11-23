import * as React from 'react';

function SvgLeafStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M11.5 4.5l-11 11 3-3v-6c0-3.314 4-6 11.5-6a.5.5 0 01.5.5c0 7.5-2.686 11.5-6 11.5h-6l8-8zm-4 4H11 7.5zm0-3.5v3.5V5z"
      />
    </svg>
  );
}

export default SvgLeafStroke;
