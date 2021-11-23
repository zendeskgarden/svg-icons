import * as React from 'react';

function SvgCarStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M1 4.5h10a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H1A.5.5 0 01.5 9V5a.5.5 0 01.5-.5zm.5 5h1V11a.5.5 0 11-1 0V9.5zm8 0h1V11a.5.5 0 11-1 0V9.5zm-7-9h7l1 4h-9l1-4zm.5 6a.5.5 0 100 1 .5.5 0 000-1zm6 0a.5.5 0 100 1 .5.5 0 000-1z"
      />
    </svg>
  );
}

export default SvgCarStroke;
