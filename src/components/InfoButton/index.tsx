import React from 'react';

import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import * as S from './styles';

export type InfoButtonProps = {
  content: string;
};

export const InfoButton = ({ content }: InfoButtonProps) => (
  <Tooltip content={content}>
    <S.Container>
      <Icon name="info" color="subdued" size="sm" />
    </S.Container>
  </Tooltip>
);
