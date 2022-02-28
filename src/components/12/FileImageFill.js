import * as React from 'react';

function SvgFileImageFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M10.5 4h-2C7.67 4 7 3.33 7 2.5v-2c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4.5c0-.28-.22-.5-.5-.5zM8 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm.94 4.94c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-.56-.56-.56.56c-.24.24-.64.24-.88 0L5 8.88 3.94 9.94c-.24.24-.64.24-.88 0s-.24-.64 0-.88l1.5-1.5c.24-.24.64-.24.88 0L6.5 8.62l.56-.56c.24-.24.64-.24.88 0l1 1c.25.24.25.64 0 .88zM8 .5V2c0 .55.45 1 1 1h1.5c.45 0 .67-.54.35-.85l-2-2C8.54-.17 8 .06 8 .5z"
      />
    </svg>
  );
}

export default SvgFileImageFill;
