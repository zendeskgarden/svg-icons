import * as React from 'react';

function SvgCheckCircleFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zm4.44 5.94l-5 5c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-2.5-2.5c-.24-.24-.24-.64 0-.88s.64-.24.88 0l2.06 2.06 4.56-4.56c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z"
      />
    </svg>
  );
}

export default SvgCheckCircleFill;
