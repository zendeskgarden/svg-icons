import * as React from 'react';

function SvgPuzzlePieceFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M10.1 3.94c.63-.29 1.04-.98.87-1.75-.12-.56-.59-1.03-1.15-1.15-.78-.17-1.47.23-1.76.86L6.27.11a.38.38 0 00-.54 0L4.18 1.66c-.19.19-.12.51.13.62a1.54 1.54 0 11-2.03 2.03c-.11-.25-.43-.32-.62-.13L.11 5.73a.38.38 0 000 .54L1.9 8.06c-.63.29-1.03.98-.87 1.75.12.56.59 1.03 1.15 1.15.77.17 1.46-.24 1.75-.87l1.79 1.79c.15.15.39.15.54 0l1.54-1.54c.19-.19.13-.51-.12-.62-.53-.24-.91-.78-.91-1.41a1.54 1.54 0 012.95-.62c.11.25.43.32.62.12l1.54-1.54a.38.38 0 000-.54L10.1 3.94z"
      />
    </svg>
  );
}

export default SvgPuzzlePieceFill;
