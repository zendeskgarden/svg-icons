import * as React from 'react';

function SvgPencilStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M.5 11.5v-2L9.1.9c.2-.2.5-.2.7 0l1.3 1.3c.2.2.2.5 0 .7l-8.6 8.6h-2zm7-9l2 2"
      />
    </svg>
  );
}

export default SvgPencilStroke;
