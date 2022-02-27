import * as React from 'react';

function SvgXFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3 13L13 3m0 10L3 3" />
    </svg>
  );
}

export default SvgXFill;
