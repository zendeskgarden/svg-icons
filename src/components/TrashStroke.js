import * as React from 'react';

function SvgTrashStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M6.5 2.5V1c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v1.5M3 2.5h10m-6.5 11v-8m3 8v-8m-6-1V15c0 .3.2.5.5.5h8c.3 0 .5-.2.5-.5V4.5"
      />
    </svg>
  );
}

export default SvgTrashStroke;
