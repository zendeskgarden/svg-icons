import * as React from 'react';

function SvgDecimalStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <ellipse cx={7} cy={6.5} fill="none" stroke="currentColor" rx={3.5} ry={5} />
      <circle cx={2} cy={11} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgDecimalStroke;
