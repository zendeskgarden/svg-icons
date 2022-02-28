import * as React from 'react';

const SvgUploadFill = props => (
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
      d="M8.28 3.5A3.725 3.725 0 004.75 1C2.68 1 1 2.68 1 4.75c0 .3.04.61.12.92C.41 6.24 0 7.08 0 8c0 1.65 1.35 3 3 3h3V7.38L4.94 8.44c-.24.24-.64.24-.88 0s-.24-.64 0-.88L5.7 5.91c.44-.44 1.15-.44 1.59 0l1.65 1.65c.24.24.24.64 0 .88-.12.12-.28.18-.44.18s-.32-.06-.44-.18L7 7.38V11h1.53C10.48 10.88 12 9.23 12 7.25c0-2.06-1.67-3.73-3.72-3.75z"
    />
  </svg>
);

export default SvgUploadFill;
