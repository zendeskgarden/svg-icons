import * as React from 'react';

function SvgXStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path stroke="currentColor" strokeLinecap="round" d="M3 9l6-6m0 6L3 3" />
    </svg>
  );
}

export default SvgXStroke;
