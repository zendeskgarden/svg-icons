import * as React from 'react';

function SvgQuoteStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M5 6.5H3c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zm5 0H8c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5zM9.5 10c.5-.5 1-1.5 1-3V5.5m-6 4.5c.5-.5 1-1.5 1-3V5.5"
      />
    </svg>
  );
}

export default SvgQuoteStroke;
