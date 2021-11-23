import * as React from 'react';

function SvgPanelsStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M10 11.5H2c-.3 0-.5-.2-.5-.5V1c0-.3.2-.5.5-.5h8c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5zM5.5.5v11m-4-3h4m0-5h5"
      />
    </svg>
  );
}

export default SvgPanelsStroke;
