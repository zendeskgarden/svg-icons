import * as React from 'react';

function SvgClockFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2 7H5.5c-.28 0-.5-.22-.5-.5V3c0-.28.22-.5.5-.5s.5.22.5.5v3h2c.28 0 .5.22.5.5S8.28 7 8 7z"
      />
    </svg>
  );
}

export default SvgClockFill;
