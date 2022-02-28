import * as React from 'react';

const SvgFolderOpenStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <path d="M1.5 6.5h9V5c0-.3-.2-.5-.5-.5H6.5v-1c0-.6-.4-1-1-1h-3c-.6 0-1 .4-1 1v3z" />
      <path strokeLinejoin="round" d="M1.5 10.5l-1-4h11l-1 4z" />
    </g>
  </svg>
);

export default SvgFolderOpenStroke;
