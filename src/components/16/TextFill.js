import * as React from 'react';

function SvgTextFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 1h10M8 2v13"
      />
    </svg>
  );
}

export default SvgTextFill;
