import * as React from 'react';

function SvgExitStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.5 2.4l2-1.9v11l-2-1.9zm2 .1H6c.3 0 .5.2.5.5v1m-4 5.5H6c.3 0 .5-.2.5-.5V8M11 6H5m4.5-2l1.6 1.6c.2.2.2.5 0 .7L9.5 8"
      />
    </svg>
  );
}

export default SvgExitStroke;
