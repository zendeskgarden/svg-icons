import * as React from 'react';

function SvgBasketballStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        d="M8 15.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm-.5 0V15A7.5 7.5 0 0115 7.5h.5m-7-7V1A7.5 7.5 0 011 8.5H.5M3 13L13 3m0 10L3 3"
      />
    </svg>
  );
}

export default SvgBasketballStroke;
