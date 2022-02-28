import * as React from 'react';

function SvgTagFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15.5 8.79L7 .29C6.81.11 6.56 0 6.29 0H1C.45 0 0 .45 0 1v5.29c0 .27.11.52.29.71l8.5 8.5c.19.2.45.29.71.29s.51-.1.71-.29l5.29-5.29c.39-.39.39-1.03 0-1.42zM4 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      />
    </svg>
  );
}

export default SvgTagFill;
