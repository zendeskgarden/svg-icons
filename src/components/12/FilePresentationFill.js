import * as React from 'react';

function SvgFilePresentationFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M10.5 4h-2C7.67 4 7 3.33 7 2.5v-2c0-.28-.22-.5-.5-.5H2c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V4.5c0-.28-.22-.5-.5-.5zM9 9c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h1c.55 0 1 .45 1 1v1zM8 .5V2c0 .55.45 1 1 1h1.5c.45 0 .67-.54.35-.85l-2-2C8.54-.17 8 .06 8 .5zM6 8h2v1H6zM4 6h2v1H4z"
      />
    </svg>
  );
}

export default SvgFilePresentationFill;
