import React from 'react';

import * as S from './styles';

export type TagProps = {
  label: string;
  loading?: boolean;
  isEmpty?: boolean;
  color?: 'default' | 'contrast';
};

export const Tag = ({
  label,
  isEmpty = false,
  color = 'default',
}: TagProps) => (
  <S.Container aria-label={label} isEmpty={isEmpty} color={color}>
    {isEmpty ? <S.Rect /> : label}
  </S.Container>
);
