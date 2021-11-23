import * as React from 'react';

function SvgCenterFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M10 11a1 1 0 000-2H2a1 1 0 100 2h8zM8 3H4a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1zM2 0a1 1 0 100 2h8a1 1 0 000-2H2z"
      />
    </svg>
  );
}

export default SvgCenterFill;
