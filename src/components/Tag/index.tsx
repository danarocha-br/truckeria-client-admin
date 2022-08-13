import React from 'react';

import * as S from './styles';

export type TagProps = {
  label: string;
  loading?: boolean;
  isEmpty?: boolean;
};

export const Tag = ({ label, isEmpty = false }: TagProps) => (
  <S.Container aria-label={label} isEmpty={isEmpty}>
    {isEmpty ? <S.Rect /> : label}
  </S.Container>
);
