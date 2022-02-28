import * as React from 'react';

function SvgDuplicateFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M11 5H4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1.5 5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5zm0-2h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5zM2 5c0-.55.45-1 1-1h5.5c.28 0 .5-.22.5-.5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1h.5c.28 0 .5-.22.5-.5V5zm.5-3h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"
      />
    </svg>
  );
}

export default SvgDuplicateFill;
