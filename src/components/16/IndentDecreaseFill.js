import * as React from 'react';

function SvgIndentDecreaseFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 2h12M8 6h6m-6 4h6M2 14h12"
      />
      <path
        fill="currentColor"
        d="M4.15 4.35L1.21 7.29a.996.996 0 000 1.41l2.94 2.94c.31.32.85.1.85-.35V4.71a.5.5 0 00-.85-.36z"
      />
    </svg>
  );
}

export default SvgIndentDecreaseFill;
