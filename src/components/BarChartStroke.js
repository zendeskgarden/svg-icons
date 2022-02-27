import * as React from 'react';

function SvgBarChartStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M8 6v8m-6-4v4M14 2v12" />
    </svg>
  );
}

export default SvgBarChartStroke;
