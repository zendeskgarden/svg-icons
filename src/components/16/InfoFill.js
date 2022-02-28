import * as React from 'react';

function SvgInfoFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.5 16C3.36 16 0 12.64 0 8.5 0 4.36 3.36 1 7.5 1S15 4.36 15 8.5c0 4.14-3.36 7.5-7.5 7.5zM7 12.5c0 .28.22.5.5.5s.5-.22.5-.5V8c0-.28-.22-.5-.5-.5S7 7.72 7 8v4.5zM7.5 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
      />
    </svg>
  );
}

export default SvgInfoFill;
