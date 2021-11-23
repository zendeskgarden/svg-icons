import * as React from 'react';

function SvgBotGeneric(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="currentColor"
        d="M19 5c1.054 0 1.918.816 1.995 1.85L21 7v12a2.001 2.001 0 01-1.85 1.995L19 21H7a2.001 2.001 0 01-1.995-1.85L5 19V7c0-1.054.816-1.918 1.85-1.995L7 5h12zm-3 11h-6v2h6v-2zM2.5 10a.5.5 0 01.492.41L3 10.5v5a.5.5 0 01-.5.5c-1 0-2.5-1.165-2.5-3s1.5-3 2.5-3zm21 0c1 0 2.5 1.165 2.5 3s-1.5 3-2.5 3a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5zm-7 0c-.825 0-1.5.675-1.5 1.5 0 .776.598 1.42 1.356 1.493L16.5 13l.144-.007A1.505 1.505 0 0018 11.5c0-.825-.675-1.5-1.5-1.5zm-7 0c-.776 0-1.42.598-1.493 1.356L8 11.5l.007.144A1.505 1.505 0 009.5 13c.825 0 1.5-.675 1.5-1.5S10.325 10 9.5 10z"
      />
    </svg>
  );
}

export default SvgBotGeneric;
