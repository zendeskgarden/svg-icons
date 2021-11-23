import * as React from 'react';

function SvgNotificationStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M9.5 6S9.5.5 6 .5 2.5 6 2.5 6C1.46 6 1.14 7.19 1.04 7.93c-.04.3.2.57.5.57h8.92c.3 0 .54-.27.5-.57C10.86 7.19 10.54 6 9.5 6zm-5 3c0 .83.67 1.5 1.5 1.5S7.5 9.83 7.5 9"
      />
    </svg>
  );
}

export default SvgNotificationStroke;
