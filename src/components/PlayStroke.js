import * as React from 'react';

const SvgPlayStroke = props => (
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
      d="M3.5 1.2v9.6c0 .4.5.7.9.4l4.4-4.4c.4-.4.4-1 0-1.4L4.4.9c-.4-.4-.9-.1-.9.3z"
    />
  </svg>
);

export default SvgPlayStroke;
