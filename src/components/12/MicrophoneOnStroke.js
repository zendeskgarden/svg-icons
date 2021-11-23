import * as React from 'react';

function SvgMicrophoneOnStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <g fill="none" stroke="currentColor">
        <rect width={3} height={7} x={4.5} y={0.5} rx={1.5} ry={1.5} />
        <path strokeLinecap="round" d="M9.5 5.5V6A3.5 3.5 0 016 9.5 3.5 3.5 0 012.5 6v-.5" />
      </g>
      <path fill="currentColor" d="M5 9.5h2V12H5z" />
    </svg>
  );
}

export default SvgMicrophoneOnStroke;
