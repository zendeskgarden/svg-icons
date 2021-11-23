import * as React from 'react';

function SvgRelationshapeGuide(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <path d="M7 7.8l6-6 6 6z" />
      <path fill="currentColor" d="M.5 23L13 10.4 25.5 23z" />
    </svg>
  );
}

export default SvgRelationshapeGuide;
