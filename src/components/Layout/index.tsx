import { Flex } from 'components/Flex';
import React from 'react';
import { CSS } from '../../../stitches.config';

import * as S from './styles';

export type LayoutProps = {
  children: React.ReactNode;
  appearance?: 'list' | 'grid';
  sidePanel?: React.ReactNode;
  css?: CSS;
};

export const Layout = ({
  children,
  appearance = 'list',
  sidePanel,
  css,
}: LayoutProps) => (
  <S.Container appearance={appearance} css={css}>
    {children}

    {!!sidePanel && (
      <Flex
        direction="column"
        gap="5"
        css={{
          d: 'none',

          '@bp-lg': {
            d: 'flex',
            h: 'calc(100vh - 2rem)',
            bg: '$white',
            borderTopLeftRadius: '$lg',
            borderBottomLeftRadius: '$lg',

            zIndex: 2,
            position: 'fixed',
            w: '30%',
            top: '$4',
            right: 0,
          },

          '@bp-xl': {
            w: '30.5%',
          },
        }}
      >
        {sidePanel}
      </Flex>
    )}
  </S.Container>
);
