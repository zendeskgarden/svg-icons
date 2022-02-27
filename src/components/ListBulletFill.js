import * as React from 'react';

function SvgListBulletFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6 3h8M6 8h8m-8 5h8"
      />
      <g fill="currentColor">
        <circle cx={2.5} cy={3} r={1.5} />
        <circle cx={2.5} cy={8} r={1.5} />
        <circle cx={2.5} cy={13} r={1.5} />
      </g>
    </svg>
  );
}

export default SvgListBulletFill;
