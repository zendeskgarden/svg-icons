import * as React from 'react';

function SvgTextStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M2.5 1.5h10m-5 0v14" />
    </svg>
  );
}

export default SvgTextStroke;
