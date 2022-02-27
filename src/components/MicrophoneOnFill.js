import * as React from 'react';

function SvgMicrophoneOnFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <rect width={6} height={12} x={5} rx={3} ry={3} />
        <path d="M7 13h2v3H7z" />
      </g>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M3.5 6.5V9a4.5 4.5 0 009 0V6.5"
      />
    </svg>
  );
}

export default SvgMicrophoneOnFill;
