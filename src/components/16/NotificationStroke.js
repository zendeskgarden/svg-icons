import * as React from 'react';

function SvgNotificationStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M13.5 9.5s0-9-5.5-9-5.5 9-5.5 9C.65 9.5.44 11.15.46 12c.01.28.22.5.5.5h14.08c.28 0 .49-.22.5-.5.02-.85-.19-2.5-2.04-2.5zm-7 3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"
      />
    </svg>
  );
}

export default SvgNotificationStroke;
