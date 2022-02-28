import * as React from 'react';

const SvgPlugFill = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    focusable="false"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.854.146a.5.5 0 01.057.638l-.057.07L7.707 3 9 4.293l2.146-2.147a.5.5 0 01.765.638l-.057.07L9.707 5l1.147 1.146a.5.5 0 01-.638.765l-.07-.057-.308-.309-.06.084-.07.078L7.413 9a2 2 0 01-2.701.117L4.586 9l-.44-.439-3.292 3.293a.5.5 0 01-.765-.638l.057-.07L3.44 7.854 3 7.414a2 2 0 01-.117-2.701L3 4.586l2.293-2.293a.959.959 0 01.162-.131l-.309-.308a.5.5 0 01.638-.765l.07.057L7 2.293 9.146.146a.5.5 0 01.708 0z"
    />
  </svg>
);

export default SvgPlugFill;
