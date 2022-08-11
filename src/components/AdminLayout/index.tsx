import React from 'react';

import { Sidebar, ScrollArea } from 'components';
import * as S from './styles';

export type AdminLayoutProps = {
  children: React.ReactNode;
};

export const AdminLayout = ({ children }: AdminLayoutProps) => (
  <S.Container>
    <Sidebar />

    <S.Main>
      <ScrollArea css={{ w: '$full', h: '$full' }}>{children}</ScrollArea>
    </S.Main>
  </S.Container>
);
