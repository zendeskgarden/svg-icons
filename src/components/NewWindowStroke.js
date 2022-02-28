import * as React from 'react';

function SvgNewWindowStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 10.5V14c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V2c0-.3.2-.5.5-.5h3.5"
      />
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M8 8l6.5-6.5" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 1.5h6v6"
      />
    </svg>
  );
}

export default SvgNewWindowStroke;
