import * as React from 'react';

function SvgDecimalFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <ellipse
        cx={9.5}
        cy={8}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        rx={5.5}
        ry={7}
      />
      <circle cx={1.5} cy={14.5} r={1.5} fill="currentColor" />
    </svg>
  );
}

export default SvgDecimalFill;
