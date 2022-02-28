import * as React from 'react';

function SvgFolderOpenStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <path d="M1.5 8.5h13V5c0-.28-.22-.5-.5-.5H8.5v-1c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1v5z" />
        <path
          strokeLinejoin="round"
          d="M1.43 14.08l-.83-5c-.05-.3.18-.58.49-.58h13.82c.31 0 .54.28.49.58l-.83 5c-.04.24-.25.42-.49.42H1.92c-.24 0-.45-.18-.49-.42z"
        />
      </g>
    </svg>
  );
}

export default SvgFolderOpenStroke;
