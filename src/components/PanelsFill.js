import * as React from 'react';

function SvgPanelsFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 4h7V1c0-.6-.4-1-1-1H8v4zm0 1v11h6c.6 0 1-.4 1-1V5H8zm6 10.5V15v.5zM7 11V0H2c-.6 0-1 .4-1 1v10h6zm0 1H1v3c0 .6.4 1 1 1h5v-4z"
      />
    </svg>
  );
}

export default SvgPanelsFill;
