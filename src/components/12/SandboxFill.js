import * as React from 'react';

function SvgSandboxFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M2 1l-.117.007A1 1 0 001 2v1.931l-.992 6.945A1 1 0 001 12h3a1 1 0 001-1V9l.005-.113C5.04 8.405 5.475 8 6 8l.113.005C6.595 8.04 7 8.475 7 9v2a1 1 0 001 1h3l.118-.007a1 1 0 00.874-1.117L11 3.939V2a1 1 0 00-1-1H9l-.117.007A1 1 0 008 2v1h-.5V2a1 1 0 00-1-1h-1l-.117.007A1 1 0 004.5 2v1H4V2a1 1 0 00-1-1H2z"
      />
    </svg>
  );
}

export default SvgSandboxFill;
