import * as React from 'react';

function SvgDecimalFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <ellipse cx={7.5} cy={6} fill="none" stroke="currentColor" strokeWidth={2} rx={3.5} ry={5} />
      <circle cx={1.5} cy={10.5} r={1.5} fill="currentColor" />
    </svg>
  );
}

export default SvgDecimalFill;
