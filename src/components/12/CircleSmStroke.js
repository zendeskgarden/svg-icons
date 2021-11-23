import * as React from 'react';

function SvgCircleSmStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <circle cx={6} cy={6} r={2.5} fill="none" stroke="currentColor" />
    </svg>
  );
}

export default SvgCircleSmStroke;
