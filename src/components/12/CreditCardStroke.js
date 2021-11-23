import * as React from 'react';

function SvgCreditCardStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <rect
        width={11}
        height={9}
        x={0.5}
        y={1.5}
        fill="none"
        stroke="currentColor"
        rx={0.5}
        ry={0.5}
      />
      <path fill="currentColor" d="M.5 3h11v2H.5z" />
    </svg>
  );
}

export default SvgCreditCardStroke;
