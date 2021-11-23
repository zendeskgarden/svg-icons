import * as React from 'react';

function SvgCursorArrowStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M7.584 8.291l-1.148 3.06c-.313.836-1.482.873-1.848.06l-4.5-10C-.29.57.571-.29 1.41.087l10 4.5c.814.366.777 1.535-.059 1.848l-3.06 1.148 3.563 3.562a.5.5 0 01-.708.708L7.584 8.29zM5.5 11L7 7l4-1.5L1 1l4.5 10z"
      />
    </svg>
  );
}

export default SvgCursorArrowStroke;
