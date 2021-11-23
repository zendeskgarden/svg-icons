import * as React from 'react';

function SvgMenuFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 4h12M2 8h12M2 12h12"
      />
    </svg>
  );
}

export default SvgMenuFill;
