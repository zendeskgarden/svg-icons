import * as React from 'react';

function SvgUserListFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <circle cx={4} cy={3.5} r={2.5} />
        <path d="M7.46 11H.54a.5.5 0 01-.5-.57 4 4 0 017.92 0 .5.5 0 01-.5.57z" />
      </g>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9 3h2M9 6h2m-1 3h1"
      />
    </svg>
  );
}

export default SvgUserListFill;
