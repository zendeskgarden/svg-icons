import * as React from 'react';

function SvgAsteriskStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path stroke="currentColor" strokeLinecap="round" d="M7.5 1.5v14M1.5 5l12 7m-12 0l12-7" />
    </svg>
  );
}

export default SvgAsteriskStroke;
