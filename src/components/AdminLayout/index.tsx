import React from 'react';

import { Sidebar, ScrollArea } from 'components';
import * as S from './styles';
import { CSS } from '../../../stitches.config';

export type AdminLayoutProps = {
  children: React.ReactNode;
  removePadding?: boolean;
  bgColor?: string;
  css?: CSS;
};

export function AdminLayout({
  children,
  removePadding = false,
  bgColor = '$background-subdued',
  css,
}: AdminLayoutProps) {
  return (
    <S.Container>
      <Sidebar />

      <S.Main
        removePadding={removePadding}
        css={{
          '@bp-md': {
            borderTopLeftRadius: '$lg',
            borderBottomLeftRadius: '$lg',
            bg: bgColor,
            ...css,
          },
        }}
      >
        <ScrollArea
          css={{
            w: '$full',
            h: '$full',
            px: removePadding ? '$0' : '$5',

            '@bp-md': {
              px: removePadding ? '$0' : '$8',
            },
          }}
        >
          {children}
        </ScrollArea>
      </S.Main>
    </S.Container>
  );
}
