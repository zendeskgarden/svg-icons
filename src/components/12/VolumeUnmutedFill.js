import * as React from 'react';

function SvgVolumeUnmutedFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M6 10.77c-.26 0-.52-.11-.72-.3L2.79 8H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1.79l2.49-2.47a1 1 0 011.1-.22c.37.15.62.51.62.92v7.53a1.016 1.016 0 01-1 1.01z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M8.76 7.3c.46-.33.74-.79.74-1.3s-.28-.97-.73-1.3m1.59 4.12C11.07 8.09 11.5 7.1 11.5 6c0-1.12-.45-2.13-1.18-2.86"
      />
    </svg>
  );
}

export default SvgVolumeUnmutedFill;
