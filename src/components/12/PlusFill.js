import * as React from 'react';

function SvgPlusFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 2v8m4-4H2" />
    </svg>
  );
}

export default SvgPlusFill;
