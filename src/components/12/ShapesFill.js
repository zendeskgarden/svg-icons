import * as React from 'react';

function SvgShapesFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M0 8a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H1a1 1 0 01-1-1V8zm9.25-1.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5zM6.832.445l2 3A1 1 0 018 5H4a1 1 0 01-.832-1.555l2-3a1 1 0 011.664 0z"
      />
    </svg>
  );
}

export default SvgShapesFill;
