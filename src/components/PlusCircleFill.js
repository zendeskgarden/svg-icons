import * as React from 'react';

function SvgPlusCircleFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zm4 8H8v3.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V9H3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H7V4.5c0-.28.22-.5.5-.5s.5.22.5.5V8h3.5c.28 0 .5.22.5.5s-.22.5-.5.5z"
      />
    </svg>
  );
}

export default SvgPlusCircleFill;
