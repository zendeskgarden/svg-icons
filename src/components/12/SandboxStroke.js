import * as React from 'react';

function SvgSandboxStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M2 1l-.116.007A1 1 0 001 2v1.931l-.992 6.945A1 1 0 001 12h3a1 1 0 001-1V9l.005-.113C5.041 8.405 5.475 8 6 8l.113.005C6.595 8.04 7 8.475 7 9v2a1 1 0 001 1h3l.119-.007a1 1 0 00.873-1.117L11 3.939V2a1 1 0 00-1-1H9l-.116.007A1 1 0 008 2v1h-.5V2a1 1 0 00-1-1h-1l-.116.007A1 1 0 004.5 2v1H4V2a1 1 0 00-1-1H2zm1 1v2h2.5V2h1v2H9V2h1v2l1 7H8V9a2 2 0 00-1.85-1.995L6 7a2 2 0 00-1.994 1.85L4 9v2H1l1-7V2h1z"
      />
    </svg>
  );
}

export default SvgSandboxStroke;
