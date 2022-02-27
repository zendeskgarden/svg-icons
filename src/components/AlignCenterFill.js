import * as React from 'react';

function SvgAlignCenterFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 2h12M4 6h8M2 10h12M4 14h8"
      />
    </svg>
  );
}

export default SvgAlignCenterFill;
