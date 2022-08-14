import React from 'react';

import { Flex, iconPath, Text, Icon } from 'components';

type SectionBlockProps = {
  title: string;
  icon?: keyof typeof iconPath;
  description?: string;
  children: React.ReactNode;
};

function SectionBlock({
  title,
  description,
  children,
  icon,
}: SectionBlockProps) {
  return (
    <Flex
      justify="between"
      as="section"
      css={{
        bg: '$background-default',
        borderRadius: '$md',
        p: '$6',

        flexDirection: 'column',

        '@bp-md': {
          flexDirection: 'row',
        },
      }}
    >
      <Flex
        direction="column"
        css={{
          pr: '$8',
          '@bp-md': {
            w: 300,
          },
        }}
      >
        <Text as="h2" size="lg" css={{ mb: '$4', d: 'inline-flex', gap: '$4' }}>
          {!!icon && <Icon name={icon} />}
          {title}
        </Text>
        <Text
          as="p"
          color="lighter"
          size="sm"
          weight="light"
          css={{ lineHeight: '1.3rem', mb: '$4' }}
        >
          {!!description && description}
        </Text>
      </Flex>

      <Flex direction="column" gap="5">
        {children}
      </Flex>
    </Flex>
  );
}

export default SectionBlock;
