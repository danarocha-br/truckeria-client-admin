import React from 'react';

import * as S from './styles';

export type FormErrorProps = {
  message: string;
};

export const FormError = ({ message }: FormErrorProps) => (
  <S.Container role="alert">{message}</S.Container>
);
