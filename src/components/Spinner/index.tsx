import React from 'react';

import * as S from './styles';

export type SpinnerProps = {
  variant?: 'component' | 'page';
} & React.ComponentProps<typeof S.Container>;

export const Spinner = ({
  color = 'primary',
  size = 'xs',
  variant = 'component',
  ...props
}: SpinnerProps) =>
  variant === 'component' ? (
    <S.Container color={color} size={size} {...props} />
  ) : (
    <S.ContainerPage>
      <span />
      <span />
      <span />
      <span />
    </S.ContainerPage>
  );
