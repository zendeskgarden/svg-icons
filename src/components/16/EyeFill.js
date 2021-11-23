import * as React from 'react';

function SvgEyeFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor">
        <path d="M15.83 7.42C15.1 6.38 12.38 3 8 3S.9 6.38.17 7.42a.99.99 0 000 1.16C.9 9.62 3.62 13 8 13s7.1-3.38 7.83-4.42a.99.99 0 000-1.16zM8 11c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
        <circle cx={8} cy={8} r={2} />
      </g>
    </svg>
  );
}

export default SvgEyeFill;
