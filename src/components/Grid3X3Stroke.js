import * as React from 'react';

const SvgGrid3X3Stroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      d="M1.5 1.5h9v9h-9zm3 0v9m3-9v9m-6-6h9m-9 3h9"
    />
  </svg>
);

export default SvgGrid3X3Stroke;
