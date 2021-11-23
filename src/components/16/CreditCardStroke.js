import * as React from 'react';

function SvgCreditCardStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <rect
        width={15}
        height={11}
        x={0.5}
        y={2.5}
        fill="none"
        stroke="currentColor"
        rx={0.5}
        ry={0.5}
      />
      <path fill="currentColor" d="M.5 5h15v2H.5z" />
    </svg>
  );
}

export default SvgCreditCardStroke;
