import * as React from 'react';

function SvgPuzzlePieceStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M15.15 7.65l-2.2-2.2c.89-.2 1.55-1 1.55-1.95 0-1.1-.9-2-2-2-.95 0-1.74.66-1.95 1.55L8.35.85c-.2-.2-.51-.2-.71 0l-2.2 2.2C6.34 3.26 7 4.05 7 5c0 1.1-.9 2-2 2-.95 0-1.74-.66-1.95-1.55l-2.2 2.2c-.2.2-.2.51 0 .71l2.2 2.2c-.89.2-1.55 1-1.55 1.95 0 1.1.9 2 2 2 .95 0 1.74-.66 1.95-1.55l2.2 2.2c.2.2.51.2.71 0l2.2-2.2C9.66 12.74 9 11.95 9 11c0-1.1.9-2 2-2 .95 0 1.74.66 1.95 1.55l2.2-2.2c.19-.19.19-.51 0-.7z"
      />
    </svg>
  );
}

export default SvgPuzzlePieceStroke;
