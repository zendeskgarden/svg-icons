import * as React from 'react';

function SvgBarChartStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M10 2v8M6 5v5M2 8v2" />
    </svg>
  );
}

export default SvgBarChartStroke;
