import * as React from 'react';

function SvgPlusStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path stroke="currentColor" strokeLinecap="round" d="M7.5 2.5v12m6-6h-12" />
    </svg>
  );
}

export default SvgPlusStroke;
