import * as React from 'react';

function SvgLightbulbStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="currentColor">
        <path d="M5.5 10.997a4.955 4.955 0 01-3-4.542c0-2.738 2.24-4.955 5-4.955s5 2.217 5 4.955a4.955 4.955 0 01-3 4.542V12.5h-4v-1.503z" />
        <path strokeLinejoin="round" d="M6.5 7.5h2-2zm1 0V10 7.5z" />
      </g>
      <path
        fill="currentColor"
        d="M5 14h5v.727C10 15.43 9.43 16 8.727 16H6.273C5.57 16 5 15.43 5 14.727V14z"
      />
    </svg>
  );
}

export default SvgLightbulbStroke;
