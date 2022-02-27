import * as React from 'react';

function SvgDecimalStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <ellipse cx={8.8} cy={8.5} fill="none" stroke="currentColor" rx={5.2} ry={7} />
      <circle cx={2} cy={15} r={1} fill="currentColor" />
    </svg>
  );
}

export default SvgDecimalStroke;
