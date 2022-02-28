import * as React from 'react';

function SvgTrashFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M2 2.5h8" />
      <path
        fill="currentColor"
        d="M2 4v7c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4H2zm3 5.5c0 .28-.22.5-.5.5S4 9.78 4 9.5V6c0-.28.22-.5.5-.5s.5.22.5.5v3.5zm3 0c0 .28-.22.5-.5.5S7 9.78 7 9.5V6c0-.28.22-.5.5-.5s.5.22.5.5v3.5zM8 3H4V1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2z"
      />
    </svg>
  );
}

export default SvgTrashFill;
