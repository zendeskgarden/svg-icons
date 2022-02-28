import * as React from 'react';

const SvgChevronBoxFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM8.94 5.44L6.8 7.59c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L3.06 5.44c-.24-.24-.24-.64 0-.88s.64-.24.88 0L6 6.62l2.06-2.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z"
    />
  </svg>
);

export default SvgChevronBoxFill;
