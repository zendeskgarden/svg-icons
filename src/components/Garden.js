import * as React from 'react';

function SvgGarden(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="currentColor"
        d="M2 13.5C2 19.302 6.921 24 13 24s11-4.698 11-10.5V3c-6.079 0-11 4.698-11 10.5C13 7.698 8.079 3 2 3v10.5z"
      />
    </svg>
  );
}

export default SvgGarden;
