import * as React from 'react';

function SvgRelationshapeMessage(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" {...props}>
      <circle cx={4.9} cy={7.4} r={4.4} />
      <circle cx={18} cy={15.5} r={7.5} fill="currentColor" />
    </svg>
  );
}

export default SvgRelationshapeMessage;
