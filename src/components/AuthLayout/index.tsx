import Image from 'next/image';
import React from 'react';

import { Flex, Box, Text, Logo } from '../';
import * as S from './styles';

type AuthLayoutProps = {
  children: React.ReactNode;
  title?: string;
  position?: 'left' | 'right';
};

export function AuthLayout({
  children,
  title,
  position = 'left',
}: AuthLayoutProps) {
  return (
    <Flex
      justify="between"
      css={{
        bg: '$background-default',
        flexDirection: position === 'right' ? 'row-reverse' : 'ro',
      }}
      fullWidth
    >
      <S.AnimatedContainer position={position}>
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
      </S.AnimatedContainer>

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
}
