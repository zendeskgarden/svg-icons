import * as React from 'react';

function SvgMicrophoneOnFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="currentColor">
        <path d="M5 9.5h2V12H5z" />
        <rect width={4} height={8} x={4} rx={2} ry={2} />
      </g>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M9.5 5.5V6A3.5 3.5 0 016 9.5 3.5 3.5 0 012.5 6v-.5"
      />
    </svg>
  );
}

export default SvgMicrophoneOnFill;
