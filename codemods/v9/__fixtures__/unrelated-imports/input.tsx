import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import type { IButtonProps } from '@zendeskgarden/react-buttons';
import { formatDate } from '../utils/dates';
import XIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

export const Row = (props: IButtonProps) => {
  const [label] = useState(formatDate(new Date()));

  return (
    <Button {...props} aria-label={label}>
      <XIcon />
    </Button>
  );
};
