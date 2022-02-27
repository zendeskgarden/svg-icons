import * as React from 'react';

function SvgSortStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M3 6.5l4.6-4.6a.48.48 0 01.7 0L13 6.5m-10 3l4.6 4.6a.48.48 0 00.7 0l4.6-4.6"
      />
    </svg>
  );
}

export default SvgSortStroke;
