import React from 'react';
import { Flex, Box, Text, Logo } from 'truckeria-design';

type AuthLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <Flex justify="between" css={{ bg: '$background-default' }} fullWidth>
      <Flex
        direction="column"
        align="center"
        fullWidth
        css={{
          py: '$8',
          px: '$8',
          flex: 1,
          position: 'relative',
          h: '$full',
          overflowY: 'auto',
          pt: '7rem',

          '@bp-md': {
            px: '10rem',
          },
          '@bp-xl': {
            px: '15rem',
          },
        }}
      >
        <Logo
          variant="default"
          size="md"
          css={{ transform: 'scale(1.45)' , mb: '$8'}}
        />

        {!!title && (
          <Text as="h1" size="lg" color='subdued' css={{ mb: '$8' }}>
            {title}
          </Text>
        )}

        {children}
      </Flex>

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
        <Box
          css={{
            w: '$full',
            h: '$full',
            backgroundImage: `url('/img/truckeria-bg-2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Box>
      </Box>
    </Flex>
  );
};

export default AuthLayout;
