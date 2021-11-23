import * as React from 'react';

function SvgListBulletFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5 2h5M5 6h5m-5 4h5"
      />
      <g fill="currentColor">
        <circle cx={2} cy={2} r={1} />
        <circle cx={2} cy={6} r={1} />
        <circle cx={2} cy={10} r={1} />
      </g>
    </svg>
  );
}

export default SvgListBulletFill;
