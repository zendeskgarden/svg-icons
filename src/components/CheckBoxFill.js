import * as React from 'react';

function SvgCheckBoxFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14 1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1.56 5.44l-5 5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2.5-2.5c-.24-.24-.24-.64 0-.88s.64-.24.88 0L7 10.12l4.56-4.56c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z"
      />
    </svg>
  );
}

export default SvgCheckBoxFill;
