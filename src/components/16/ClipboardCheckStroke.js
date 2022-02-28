import * as React from 'react';

function SvgClipboardCheckStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 2.5H2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5h-2.5m-6.5 8l2 2L11.5 8m-.05-3.5c.02-.16.05-.33.05-.5C11.5 2.07 9.93.5 8 .5S4.5 2.07 4.5 4c0 .17.03.34.05.5h6.9z"
      />
    </svg>
  );
}

export default SvgClipboardCheckStroke;
