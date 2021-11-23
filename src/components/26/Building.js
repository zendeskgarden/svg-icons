import * as React from 'react';

function SvgBuilding(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="currentColor"
        d="M5 4a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1h-3a1 1 0 01-1-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm4 2v3h3V6H9zm0 5v3h3v-3H9zm5-5v3h3V6h-3zm0 5v3h3v-3h-3z"
      />
    </svg>
  );
}

export default SvgBuilding;
