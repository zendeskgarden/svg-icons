import React from 'react';
import AltTextStrokeIcon from '@zendeskgarden/svg-icons/src/16/alt-text-stroke.svg';
import AltTextFillIcon from '@zendeskgarden/svg-icons/src/16/alt-text-fill.svg';

export const Labels = ({ active }: { active: boolean }) =>
  active ? <AltTextFillIcon /> : <AltTextStrokeIcon />;
