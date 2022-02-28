import * as React from 'react';

function SvgFilePresentationFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M10 3.5V.54c0-.3-.24-.54-.54-.54H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5.5c0-.28-.22-.5-.5-.5h-3c-.83 0-1.5-.67-1.5-1.5zm2 9.5c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1H5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1h1c.55 0 1 .45 1 1v3zM11 .5V3c0 .55.45 1 1 1h2.5c.45 0 .67-.54.35-.85l-3-3C11.54-.17 11 .06 11 .5zM9 9V8H5v3h1v-1c0-.55.45-1 1-1h2zm-2 1h4v3H7z"
      />
    </svg>
  );
}

export default SvgFilePresentationFill;
