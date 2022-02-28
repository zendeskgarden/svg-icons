import * as React from 'react';

function SvgDuplicateStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.5 6.5H1C.7 6.5.5 6.3.5 6V1C.5.7.7.5 1 .5h7c.3 0 .5.2.5.5v2.5m-6-1h4m-1 5h4m-4 2h4M4 5.5h7c.3 0 .5.2.5.5v5c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5z"
      />
    </svg>
  );
}

export default SvgDuplicateStroke;
