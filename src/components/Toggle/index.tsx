import React from 'react';
import { ToggleProps as PrimitiveToogleProps } from '@radix-ui/react-toggle';

import * as S from './styles';
import { CSS } from '../../../stitches.config';

export type ToggleProps = {
  children: React.ReactNode;
  ariaLabel: string;
  css?: CSS;
} & PrimitiveToogleProps;

export const Toggle = ({
  children,
  pressed,
  defaultPressed,
  onPressedChange,
  ariaLabel,
  css,
}: ToggleProps) => (
  <S.Container
    aria-label={ariaLabel}
    defaultPressed={defaultPressed}
    pressed={pressed}
    onPressedChange={onPressedChange}
    css={css}
  >
    {children}
  </S.Container>
);
