import * as React from 'react';

function SvgMobilePhoneStroke(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <rect
        width={9}
        height={15}
        x={3.5}
        y={0.5}
        fill="none"
        stroke="currentColor"
        rx={0.5}
        ry={0.5}
      />
      <path
        fill="currentColor"
        d="M3.5.5h9V2h-9zm0 12.5v2.5h9V13h-9zm6 2h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5z"
      />
    </svg>
  );
}

export default SvgMobilePhoneStroke;
