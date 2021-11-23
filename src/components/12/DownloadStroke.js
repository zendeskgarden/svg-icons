import * as React from 'react';

function SvgDownloadStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M1.5 11.5h9m-8-6l3.1 3.1c.2.2.5.2.7 0l3.1-3.1M6 8.5v-8"
      />
    </svg>
  );
}

export default SvgDownloadStroke;
