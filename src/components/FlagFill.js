import * as React from 'react';

function SvgFlagFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M2.5 15.5V.5" />
      <path
        fill="currentColor"
        d="M13.29 9H4V1h9.29c.41 0 .77.24.92.62s.07.8-.22 1.09L11.71 5 14 7.29A1.002 1.002 0 0113.29 9z"
      />
    </svg>
  );
}

export default SvgFlagFill;
