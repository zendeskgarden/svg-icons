import * as React from 'react';

function SvgImageFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-3.5 3c.83 0 1.5.67 1.5 1.5S12.33 7 11.5 7 10 6.33 10 5.5 10.67 4 11.5 4zm3.44 9.44c-.12.12-.28.18-.44.18s-.32-.06-.44-.18L12 11.38l-1.2 1.21c-.44.44-1.15.44-1.59 0L6 9.38l-4.06 4.06c-.24.24-.64.24-.88 0s-.24-.64 0-.88L5.2 8.41c.42-.42 1.17-.42 1.59 0l3.2 3.2 1.2-1.21c.43-.42 1.17-.42 1.59 0l2.15 2.15c.26.25.26.65.01.89z"
      />
    </svg>
  );
}

export default SvgImageFill;
