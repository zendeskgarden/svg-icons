import * as React from 'react';

function SvgCreditCardFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15 2H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM1 7V5h14v2H1z"
      />
    </svg>
  );
}

export default SvgCreditCardFill;
