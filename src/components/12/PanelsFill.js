import * as React from 'react';

function SvgPanelsFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M5 0H2c-.6 0-1 .4-1 1v7h4V0zm1 3h5V1c0-.6-.4-1-1-1H6v3zm0 9h4c.6 0 1-.4 1-1V4H6v8zM5 9H1v2c0 .6.4 1 1 1h3V9z"
      />
    </svg>
  );
}

export default SvgPanelsFill;
