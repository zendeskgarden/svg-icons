import * as React from 'react';

function SvgFullWidthFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M2 15a1 1 0 010-2h12a1 1 0 010 2H2zM14 5H2a1 1 0 00-1 1v4a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM2 3a1 1 0 110-2h12a1 1 0 010 2H2z"
      />
    </svg>
  );
}

export default SvgFullWidthFill;
