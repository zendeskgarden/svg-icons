import * as React from 'react';

function SvgImageFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM8 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.94 6.94c-.12.12-.28.18-.44.18s-.32-.06-.44-.18L8.5 8.38l-.7.71c-.44.44-1.15.44-1.59 0L4.5 7.38 1.94 9.94c-.24.24-.64.24-.88 0s-.24-.64 0-.88L3.7 6.41c.44-.44 1.15-.44 1.59 0L7 8.12l.7-.71c.44-.44 1.15-.44 1.59 0l1.65 1.65c.25.24.25.64 0 .88z"
      />
    </svg>
  );
}

export default SvgImageFill;
