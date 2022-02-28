import * as React from 'react';

function SvgChevronBoxFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-2.56 5.94L8.8 10.59c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L3.56 6.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L8 9.62l3.56-3.56c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z"
      />
    </svg>
  );
}

export default SvgChevronBoxFill;
