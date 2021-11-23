import * as React from 'react';

function SvgMicrophoneOnStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={5} height={11} x={5.5} y={0.5} rx={2.5} ry={2.5} />
        <path strokeLinecap="round" d="M3.5 6.5V9a4.5 4.5 0 009 0V6.5" />
      </g>
      <path fill="currentColor" d="M7 13h2v3H7z" />
    </svg>
  );
}

export default SvgMicrophoneOnStroke;
