import * as React from 'react';

function SvgStarStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        d="M6 9.3l2.9 1.9c.3.2.8-.1.7-.5l-.9-3.4 2.7-2.2c.3-.3.1-.8-.3-.8l-3.4-.1L6.4 1c-.1-.4-.7-.4-.8 0L4.3 4.2l-3.4.2c-.4 0-.6.5-.3.8l2.7 2.2-.9 3.3c-.1.4.3.7.7.5L6 9.3z"
      />
    </svg>
  );
}

export default SvgStarStroke;
