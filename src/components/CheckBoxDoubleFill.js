import * as React from 'react';

function SvgCheckBoxDoubleFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M4.5 14.5H14c.28 0 .5-.22.5-.5V4.5"
      />
      <path
        fill="currentColor"
        d="M12 1H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1.06 3.94l-4.5 4.5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2.5-2.5c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 8.12l4.06-4.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z"
      />
    </svg>
  );
}

export default SvgCheckBoxDoubleFill;
