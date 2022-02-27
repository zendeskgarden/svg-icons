import * as React from 'react';

function SvgCreditCard(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="currentColor"
        d="M22 6H4a1.003 1.003 0 00-1 1v12a1.003 1.003 0 001 1h18a1.003 1.003 0 001-1V7a1.003 1.003 0 00-1-1zm-1 6.5a.495.495 0 01-.5.5h-15a.495.495 0 01-.5-.5v-2a.495.495 0 01.5-.5h15a.495.495 0 01.5.5z"
      />
    </svg>
  );
}

export default SvgCreditCard;
