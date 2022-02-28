import * as React from 'react';

const SvgAlertWarningStroke = props => (
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
      d="M5.06 1.27l-4.5 8.5c-.18.33.06.73.44.73h9c.38 0 .62-.4.44-.73l-4.5-8.5a.494.494 0 00-.88 0zM5.5 4v2"
    />
    <circle cx={5.5} cy={8} r={0.8} fill="currentColor" />
  </svg>
);

export default SvgAlertWarningStroke;
