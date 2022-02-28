import * as React from 'react';

const SvgPerson = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    focusable="false"
    viewBox="0 0 26 26"
    {...props}
  >
    <g fill="currentColor">
      <circle cx={13} cy={9} r={4} />
      <path d="M7.019 21c-.613 0-1.105-.538-1.007-1.136C6.561 16.538 9.481 14 13 14s6.439 2.538 6.987 5.864c.099.598-.394 1.136-1.006 1.136H7.019z" />
    </g>
  </svg>
);

export default SvgPerson;
