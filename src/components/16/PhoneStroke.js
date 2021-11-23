import * as React from 'react';

function SvgPhoneStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M10 10.586l1.293-1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-1.232 1.232a3.5 3.5 0 01-4.95 0L1.061 6.475a3.5 3.5 0 010-4.95L2.293.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414L5.414 6 10 10.586zM3 1L1.768 2.232a2.5 2.5 0 000 3.536l8.464 8.464a2.5 2.5 0 003.536 0L15 13l-3-3-2 2-6-6 2-2-3-3z"
      />
    </svg>
  );
}

export default SvgPhoneStroke;
