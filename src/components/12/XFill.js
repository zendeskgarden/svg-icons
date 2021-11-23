import * as React from 'react';

function SvgXFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3.5 8.5l5-5m0 5l-5-5" />
    </svg>
  );
}

export default SvgXFill;
