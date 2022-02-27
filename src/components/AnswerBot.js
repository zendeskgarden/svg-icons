import * as React from 'react';

function SvgAnswerBot(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path fill="currentColor" d="M0 0h26v26H0z" />
      <rect width={3} height={3} x={4} y={11} rx={3} ry={3} />
      <rect width={3} height={3} x={19} y={11} rx={3} ry={3} />
    </svg>
  );
}

export default SvgAnswerBot;
