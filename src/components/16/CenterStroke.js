import * as React from 'react';

function SvgCenterStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M1.5 14a.5.5 0 110-1h13a.5.5 0 110 1h-13zM11 4H5a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1zm0 1v5H5V5h6zm3.5-4a.5.5 0 110 1h-13a.5.5 0 010-1h13z"
      />
    </svg>
  );
}

export default SvgCenterStroke;
