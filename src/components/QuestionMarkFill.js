import * as React from 'react';

const SvgQuestionMarkFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 7v-.5c0-.7.4-1.3 1-1.6.7-.4 1.2-1.3 1-2.2-.2-.8-.9-1.5-1.7-1.7-1.1-.2-2 .5-2.3 1.4"
    />
    <circle cx={6} cy={10.5} r={1.5} fill="currentColor" />
  </svg>
);

export default SvgQuestionMarkFill;
