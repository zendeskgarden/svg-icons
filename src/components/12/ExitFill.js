import * as React from 'react';

function SvgExitFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M2.5 12c-.13 0-.25-.05-.35-.14l-2-1.93A.554.554 0 010 9.57V2.43c0-.13.06-.26.15-.36l2-1.93c.15-.14.36-.18.55-.1.18.08.3.26.3.46v11c0 .2-.12.38-.3.46-.07.03-.13.04-.2.04zm7-3.5c-.06 0-.13-.01-.19-.04A.499.499 0 019 8l-.01-4.06c0-.2.12-.39.31-.46.19-.08.4-.03.54.11l1.67 1.7c.38.39.38 1.02-.01 1.41L9.85 8.35a.47.47 0 01-.35.15z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="M2.5 2.5H6c.28 0 .5.22.5.5v1m-4 5.5H6c.28 0 .5-.22.5-.5V8M11 6H5"
      />
    </svg>
  );
}

export default SvgExitFill;
