import * as React from 'react';

const SvgRelationshapeGuide = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    focusable="false"
    viewBox="0 0 26 26"
    {...props}
  >
    <path d="M7 7.8l6-6 6 6z" />
    <path fill="currentColor" d="M.5 23L13 10.4 25.5 23z" />
  </svg>
);

export default SvgRelationshapeGuide;
