import * as React from 'react';

function SvgClipboardCheckFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14 2h-.5c-.28 0-.5.22-.5.5V5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-2.06 6.44l-4.5 4.5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2-2c-.24-.24-.24-.64 0-.88s.64-.24.88 0L7 11.62l4.06-4.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88zM8 0C5.79 0 4 1.79 4 4v1h8V4c0-2.21-1.79-4-4-4z"
      />
    </svg>
  );
}

export default SvgClipboardCheckFill;
