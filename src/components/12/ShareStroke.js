import * as React from 'react';

function SvgShareStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M7.5 4.5H10c.3 0 .5.2.5.5v6c0 .3-.2.5-.5.5H1c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h2.5m2 3V1m-2 1.5L5.1.9c.2-.2.5-.2.7 0l1.6 1.6"
      />
    </svg>
  );
}

export default SvgShareStroke;
