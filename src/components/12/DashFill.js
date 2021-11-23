import * as React from 'react';

function SvgDashFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3 6h6" />
    </svg>
  );
}

export default SvgDashFill;
