import * as React from 'react';

function SvgLeafStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M2.5 8.5v-3c0-2.606 2.656-4.767 8-5l1.005-.003L11.5 1.5c-.242 5.318-2.4 8-5 8h-4l6-6-8 8 2-2v-1zm3-4.5v2.5V4zm0 2.5H8 5.5z"
      />
    </svg>
  );
}

export default SvgLeafStroke;
