import * as React from 'react';

function SvgDirectionLtrFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M9.5 12a.5.5 0 01-.5-.5v-4a.5.5 0 01.854-.353L11.5 8.793a1.001 1.001 0 010 1.414l-1.646 1.646A.5.5 0 019.5 12zM4 0a2.5 2.5 0 000 5h.5V0z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M6.5 7.5V1A.5.5 0 006 .5H4.5v7m6 2H.5"
      />
    </svg>
  );
}

export default SvgDirectionLtrFill;
