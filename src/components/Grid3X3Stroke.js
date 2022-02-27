import * as React from 'react';

function SvgGrid3X3Stroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M.5.5h15v15H.5zm5 0v15m5-15v15m-10-10h15m-15 5h15"
      />
    </svg>
  );
}

export default SvgGrid3X3Stroke;
