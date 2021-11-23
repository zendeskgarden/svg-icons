import * as React from 'react';

function SvgArrowReverseFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M7 1L.5 7.5m11-3L5 11" />
      <path
        fill="currentColor"
        d="M8 4.79V.5c0-.28-.22-.5-.5-.5H3.21a.5.5 0 00-.36.85l4.29 4.29c.32.32.86.1.86-.35zM4 7.21v4.29c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85l-4.29-4.3a.5.5 0 00-.85.36z"
      />
    </svg>
  );
}

export default SvgArrowReverseFill;
