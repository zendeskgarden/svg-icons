import * as React from 'react';

function SvgMacro(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 20l-5 3v-3H4.9c-.5 0-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9H21c.6 0 1 .4 1 .9V19c0 .5-.4.9-.9.9L15 20z"
      />
      <path
        fill="currentColor"
        d="M16.1 9.3l-3.7 8c-.1.1-.2.2-.3.2H12c-.2 0-.2-.2-.2-.3l1.4-5.6-2.8.7h-.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.2-.1-.3l1.4-5.7c0-.1.2-.2.3-.2H14c.2 0 .3.1.3.3v.1L13 9.6l2.7-.7h.1c.1 0 .2.1.2.1.1.1.1.2.1.3z"
      />
    </svg>
  );
}

export default SvgMacro;
