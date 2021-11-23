import * as React from 'react';

function SvgGrid2X2Stroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M1 1v3h3V1H1zm3 6a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V8a1 1 0 011-1h3zm7 0a1 1 0 011 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h3zM4 8H1v3h3V8zm7 0H8v3h3V8zM4 0a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h3zm7 0a1 1 0 011 1v3a1 1 0 01-1 1H8a1 1 0 01-1-1V1a1 1 0 011-1h3zm0 1H8v3h3V1z"
      />
    </svg>
  );
}

export default SvgGrid2X2Stroke;
