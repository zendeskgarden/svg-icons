import * as React from 'react';

function SvgChat(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="currentColor"
        d="M20.95 4H5.05C4.473 4 4 4.476 4 5.059v12.536c0 .583.473 1.06 1.05 1.06h5.178v3.08c0 .212.23.34.41.223l5.134-3.304h5.178c.577 0 1.05-.476 1.05-1.059V5.06C22 4.476 21.527 4 20.95 4zM8.918 14C8.416 14 8 13.563 8 13.011v-.022c0-.552.416-.989.918-.989h8.154c.512 0 .928.448.928 1s-.416 1-.928 1H8.918zm0-4C8.416 10 8 9.563 8 9.011V8.99c0-.553.416-.99.918-.99h8.154c.512 0 .928.448.928 1s-.416 1-.928 1H8.918z"
      />
    </svg>
  );
}

export default SvgChat;
