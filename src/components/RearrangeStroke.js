import * as React from 'react';

function SvgRearrangeStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M1 2h11M1 14h11M4 8h11"
      />
    </svg>
  );
}

export default SvgRearrangeStroke;
