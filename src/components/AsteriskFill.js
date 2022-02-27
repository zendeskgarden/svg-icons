import * as React from 'react';

function SvgAsteriskFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 1v14M2 4.5l12 7m-12 0l12-7"
      />
    </svg>
  );
}

export default SvgAsteriskFill;
