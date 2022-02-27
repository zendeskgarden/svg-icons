import * as React from 'react';

function SvgFullWidthStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M14.5 13a.5.5 0 110 1h-13a.5.5 0 110-1h13zM14 4H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zm0 1v5H2V5h12zm.5-4a.5.5 0 110 1h-13a.5.5 0 010-1h13z"
      />
    </svg>
  );
}

export default SvgFullWidthStroke;
