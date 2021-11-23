import * as React from 'react';

function SvgCenterStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M10.5 11a.5.5 0 100-1h-9a.5.5 0 100 1h9zM4 3h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm0 1v4h4V4H4zM1.5 1a.5.5 0 000 1h9a.5.5 0 100-1h-9z"
      />
    </svg>
  );
}

export default SvgCenterStroke;
