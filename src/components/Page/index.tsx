import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import { Logo } from 'components/Logo';
import { ScrollArea } from 'components/ScrollArea';
import { Sidebar } from 'components/Sidebar';
import { Text } from 'components/Text';
import Image from 'next/image';
import React from 'react';
import { CSS } from '../../../stitches.config';

import * as S from './styles';

export type PageProps = {
  /** if true, displays admin layout */
  isAuthenticated?: boolean;
  children: React.ReactNode;
  /** applies to admin layout */
  removePadding?: boolean;
  /** applies to admin layout */
  bgColor?: string;
  /** applies to auth layout */
  title?: string;
  /** applies to auth layout */
  position?: 'left' | 'right';
  css?: CSS;
};

export const Page = ({
  isAuthenticated = true,
  children,
  removePadding = false,
  bgColor = '$background-subdued',
  title,
  position = 'left',
  css,
}: PageProps) => {
  return isAuthenticated ? (
    <S.AdminContainer>
      <Sidebar />

      <S.AdminMain
        removePadding={removePadding}
        css={{
          '@bp-md': {
            borderTopLeftRadius: '$lg',
            borderBottomLeftRadius: '$lg',
            ...css,
            [`.dark-theme &`]: {
              bg: bgColor,
            },
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
      </S.AdminMain>
    </S.AdminContainer>
  ) : (
    <Flex
      justify="between"
      css={{
        bg: '$background-default',
        flexDirection: position === 'right' ? 'row-reverse' : 'ro',
      }}
      fullWidth
    >
      <S.AnimatedAuthContainer position={position}>
        <Flex direction="column" align="center" fullWidth>
          <Logo
            variant="default"
            size="md"
            css={{ transform: 'scale(1.45)', mb: '$8' }}
          />

          {!!title && (
            <Text as="h1" size="lg" color="subdued" css={{ mb: '$8' }}>
              {title}
            </Text>
          )}

          {children}
        </Flex>
      </S.AnimatedAuthContainer>

      <Box
        css={{
          d: 'none',
          w: '$full',
          h: '$full',
          bg: 'rgba(1,1,1, 0.2)',
          position: 'sticky',
          opacity: 0.85,
          top: 0,
          flex: 2,
          '@bp-md': {
            d: 'block',
          },
        }}
      >
        <Image
          src={'/img/truckeria-bg-2.png'}
          alt="Truckeria"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
    </Flex>
  );
};
