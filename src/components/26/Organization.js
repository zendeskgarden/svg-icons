import * as React from 'react';

function SvgOrganization(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 23v-8h-4v8H6.9c-.5 0-.9-.4-.9-.9V3.9c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v18.2c0 .5-.4.9-.9.9H15zM10 7h6m-6 3h6"
      />
    </svg>
  );
}

export default SvgOrganization;
