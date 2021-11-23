import * as React from 'react';

function SvgCreditCardFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M11 1H1c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zM1 5V3h10v2H1z"
      />
    </svg>
  );
}

export default SvgCreditCardFill;
