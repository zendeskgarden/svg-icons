import * as React from 'react';

function SvgFile(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 26" {...props}>
      <path
        fill="currentColor"
        d="M13.41 0H2a2 2 0 00-2 2v22a2 2 0 002 2h16a2 2 0 002-2V6.58L13.41 0zM15 7a2 2 0 01-2-2V1l6 6h-4z"
      />
    </svg>
  );
}

export default SvgFile;
