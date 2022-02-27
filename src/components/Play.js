import * as React from 'react';

function SvgPlay(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <circle cx={13} cy={13} r={11} fill="none" stroke="currentColor" strokeWidth={2} />
      <path fill="currentColor" d="M17 13l-6 4V9" />
    </svg>
  );
}

export default SvgPlay;
