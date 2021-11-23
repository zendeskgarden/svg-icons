import * as React from 'react';

function SvgSmileyFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm2 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6.48 4.16A4.632 4.632 0 018 12.63c-2.11 0-3.95-1.42-4.48-3.46-.08-.34.12-.68.45-.77.34-.09.68.11.76.45A3.38 3.38 0 008 11.38a3.38 3.38 0 003.27-2.53c.09-.33.42-.53.76-.45.33.08.54.42.45.76z"
      />
    </svg>
  );
}

export default SvgSmileyFill;
