import * as React from 'react';

function SvgSignpostStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        d="M2 2.5h7.293a.5.5 0 01.354.146l1.5 1.5a.5.5 0 010 .707l-1.5 1.5a.5.5 0 01-.354.147H2a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z"
      />
      <path fill="currentColor" d="M5 0h2v1H5zm0 8h2v4H5z" />
    </svg>
  );
}

export default SvgSignpostStroke;
