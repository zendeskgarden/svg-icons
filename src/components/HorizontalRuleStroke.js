import * as React from 'react';

const SvgHorizontalRuleStroke = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path fill="none" stroke="currentColor" strokeLinecap="round" d="M.5 6.5h11" />
  </svg>
);

export default SvgHorizontalRuleStroke;
