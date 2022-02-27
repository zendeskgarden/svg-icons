import * as React from 'react';

function SvgDownloadFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" d="M8 12V.5m-6.5 15h13" />
      <path
        fill="currentColor"
        d="M12.24 8.84l-3.5 3.85c-.4.44-1.08.44-1.48 0l-3.5-3.85A.504.504 0 014.13 8h7.74c.43 0 .66.52.37.84z"
      />
    </svg>
  );
}

export default SvgDownloadFill;
