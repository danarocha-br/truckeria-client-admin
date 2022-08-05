import React from 'react';

import { Flex, Logo, Box } from 'components';

// import { Container } from './styles';

const NAVIGATION = Array.from({ length: 4 }).map((_, i) => `${i}`);

const Previews = () => {
  return (
    <Flex
      fullWidth
      css={{
        flex: 1,
        bg: '#E6ABC780',
        h: '$full',
        d: 'none',
        pt: '$8',
        pl: '$8',

        '@bp-md': {
          d: 'flex',
        },
        '@bp-lg': {
          flex: 2,
        },
      }}
    >
      <Flex
        css={{
          bg: '$surface-base-default',
          h: '$full',
          borderTopLeftRadius: '$sm',
        }}
      >
        <Flex
          direction="column"
          justify="between"
          gap={5}
          css={{ w: '13rem', p: '$4', h: '$full' }}
        >
          <Logo css={{ transform: 'scale(0.85)' }} />

          <Flex direction="column" gap={6} css={{}}>
            {NAVIGATION.map((_, i) => (
              <Box
                key={i}
                css={{
                  h: '$4',
                  w: `$13`,
                  borderRadius: '$sm',
                  bg: '$surface-base-subdued',
                  opacity: 0.4,
                }}
              />
            ))}
          </Flex>

          <Box
            css={{
              h: '$4',
              w: `$10`,
              borderRadius: '$sm',
              bg: '$surface-base-subdued',
              mb: '$4',
              opacity: 0.4,
            }}
          />
        </Flex>
        <Flex
          css={{
            bg: '$surface-base-subdued',
            h: '$full',
            borderTopLeftRadius: '$lg',
            mt: '$2',
            p: '$4',
          }}
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default Previews;
