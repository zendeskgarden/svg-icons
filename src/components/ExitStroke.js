import * as React from 'react';

function SvgExitStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M.7 2.4l2-1.7c.3-.3.8 0 .8.4V15c0 .4-.5.7-.8.4l-2-1.7c-.1-.1-.2-.2-.2-.4V2.7c0-.1.1-.3.2-.3zm2.8.1H9c.3 0 .5.2.5.5v2.5m-6 8H9c.3 0 .5-.2.5-.5v-2.5M15 8H7m5.5-3l2.6 2.6c.2.2.2.5 0 .7L12.5 11"
      />
    </svg>
  );
}

export default SvgExitStroke;
