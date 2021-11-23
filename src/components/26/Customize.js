import * as React from 'react';

function SvgCustomize(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <g fill="currentColor">
        <path d="M13 17.36A4.36 4.36 0 1117.36 13 4.36 4.36 0 0113 17.36m9.63-5C21 10.55 17.28 6 13 6s-8 4.54-9.63 6.3a1 1 0 000 1.37C5 15.45 8.72 20 13 20s8-4.54 9.63-6.3a1 1 0 000-1.37" />
        <circle cx={13} cy={13} r={2.7} />
      </g>
    </svg>
  );
}

export default SvgCustomize;
