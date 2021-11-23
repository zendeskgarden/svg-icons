import * as React from 'react';

function SvgSandboxFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3 1l-.117.007A1 1 0 002 2v1.898L.02 13.804A1 1 0 001 15h4a1 1 0 001-1v-3l.005-.147C6.065 9.828 6.939 9 8 9l.147.005C9.172 9.065 10 9.939 10 11v3a1 1 0 001 1h4l.116-.007a1 1 0 00.865-1.19L14 3.904V2a1 1 0 00-1-1h-1l-.117.007A1 1 0 0011 2v1h-1V2a1 1 0 00-1-1H7l-.117.007A1 1 0 006 2v1H5V2a1 1 0 00-1-1H3z"
      />
    </svg>
  );
}

export default SvgSandboxFill;
