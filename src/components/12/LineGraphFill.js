import * as React from 'react';

function SvgLineGraphFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12" {...props}>
      <path
        fill="currentColor"
        d="M11 1H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm.04 4.62L9.82 7.45c-.23.35-.81.35-1.04 0L7.1 4.93 4.69 8.55c-.12.17-.31.28-.52.28s-.4-.1-.52-.28L2.7 7.13l-.68 1.02c-.19.29-.58.36-.87.17s-.36-.58-.17-.86l1.2-1.8c.12-.18.31-.28.52-.28s.4.1.52.28l.95 1.42 2.41-3.62c.23-.35.81-.35 1.04 0L9.3 5.97l.7-1.05c.19-.29.58-.37.87-.17.28.19.36.58.17.87z"
      />
    </svg>
  );
}

export default SvgLineGraphFill;
