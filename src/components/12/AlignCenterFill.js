import * as React from 'react';

function SvgAlignCenterFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 1h8M4 4h4M2 7h8m-6 3h4"
      />
    </svg>
  );
}

export default SvgAlignCenterFill;
