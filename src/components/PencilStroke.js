import * as React from 'react';

function SvgPencilStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M.5 15.5V13L12.6.9c.2-.2.5-.2.7 0l1.8 1.8c.2.2.2.5 0 .7L3 15.5H.5zM11 3l2 2"
      />
    </svg>
  );
}

export default SvgPencilStroke;
