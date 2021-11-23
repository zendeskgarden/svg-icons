import * as React from 'react';

function SvgPlusStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path stroke="currentColor" strokeLinecap="round" d="M5.5 2.5v8m4-4h-8" />
    </svg>
  );
}

export default SvgPlusStroke;
