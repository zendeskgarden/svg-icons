import * as React from 'react';

function SvgTextFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 1h6M6 1v10"
      />
    </svg>
  );
}

export default SvgTextFill;
