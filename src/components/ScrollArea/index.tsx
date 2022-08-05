import { CSS } from '@stitches/react';
import React from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';

import * as S from './styles';
import { config } from '../../../stitches.config';

export type CustomScrollAreaProps = {
  children: React.ReactNode;
  css?: CSS<typeof config>;
  hideScrollHorizontal?: boolean;
  hideScrollVertical?: boolean;
} & ScrollAreaProps;

export const ScrollArea = ({
  children,
  css,
  hideScrollHorizontal = false,
  hideScrollVertical = false,
  ...props
}: CustomScrollAreaProps) => (
  <S.ScrollAreaRoot {...props}>
    <S.ScrollAreaViewport css={css}>{children}</S.ScrollAreaViewport>

    {!hideScrollVertical && (
      <S.Scrollbar orientation="vertical">
        <S.ScrollAreaThumb />
      </S.Scrollbar>
    )}
    {!hideScrollHorizontal && (
      <S.Scrollbar orientation="horizontal">
        <S.ScrollAreaThumb />
      </S.Scrollbar>
    )}
    <S.ScrollAreaCorner />
  </S.ScrollAreaRoot>
);
