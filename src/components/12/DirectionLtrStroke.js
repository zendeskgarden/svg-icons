import * as React from 'react';

function SvgDirectionLtrStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M6.5 7.5V1c0-.3-.2-.5-.5-.5H4.5v7m5 4l1.6-1.6c.2-.2.2-.5 0-.7L9.5 7.5M4 .5c-1.1 0-2 .9-2 2s.9 2 2 2m6.5 5H.5"
      />
    </svg>
  );
}

export default SvgDirectionLtrStroke;
