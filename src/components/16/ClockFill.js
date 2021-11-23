import * as React from 'react';

function SvgClockFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0C3.59 0 0 3.59 0 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm3 9H7.5c-.28 0-.5-.22-.5-.5V3c0-.28.22-.5.5-.5s.5.22.5.5v5h3c.28 0 .5.22.5.5s-.22.5-.5.5z"
      />
    </svg>
  );
}

export default SvgClockFill;
