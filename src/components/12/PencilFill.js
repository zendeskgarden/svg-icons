import * as React from 'react';

function SvgPencilFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M6.7 2.59L.15 9.15A.47.47 0 000 9.5v2c0 .28.22.5.5.5h2c.13 0 .26-.05.35-.15L9.41 5.3 6.7 2.59zm4.8-.8L10.21.5A.996.996 0 008.8.5L7.6 1.7l2.71 2.71 1.2-1.2c.38-.39.38-1.03-.01-1.42z"
      />
    </svg>
  );
}

export default SvgPencilFill;
