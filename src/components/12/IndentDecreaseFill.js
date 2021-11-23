import * as React from 'react';

function SvgIndentDecreaseFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10 1H2m8 3H6m4 3H6m4 3H2"
      />
      <path
        fill="currentColor"
        d="M3.5 8c.06 0 .13-.01.19-.04.19-.08.31-.26.31-.46v-4c0-.2-.12-.38-.31-.46a.474.474 0 00-.54.11L1.5 4.79a.996.996 0 000 1.41l1.65 1.65c.09.1.22.15.35.15z"
      />
    </svg>
  );
}

export default SvgIndentDecreaseFill;
