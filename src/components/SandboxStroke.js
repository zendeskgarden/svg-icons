import * as React from 'react';

function SvgSandboxStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3 1l-.116.007A1 1 0 002 2v1.898L.02 13.804A1 1 0 001 15h4a1 1 0 001-1v-3l.005-.147C6.065 9.828 6.94 9 8 9l.148.005C9.172 9.065 10 9.939 10 11v3a1 1 0 001 1h4l.117-.007a1 1 0 00.864-1.19L14 3.904V2a1 1 0 00-1-1h-1l-.117.007A1 1 0 0011 2v1h-1V2a1 1 0 00-1-1H7l-.116.007A1 1 0 006 2v1H5V2a1 1 0 00-1-1H3zm1 1v2h3V2h2v2h3V2h1v2l2 10h-4v-3a3 3 0 00-2.823-2.995L8 8a3 3 0 00-2.995 2.824L5 11v3H1L3 4V2h1z"
      />
    </svg>
  );
}

export default SvgSandboxStroke;
