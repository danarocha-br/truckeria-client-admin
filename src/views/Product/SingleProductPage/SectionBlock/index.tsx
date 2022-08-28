import React from 'react';
import { transparentize } from 'polished';

import { Flex, iconPath, Text, Icon } from 'components';
import { colors } from 'styles/tokens';

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
        bg: transparentize(0.3, colors.neutral[900]),
        borderRadius: '$md',
        py: '$6',

        flexDirection: 'column',

        '@bp-xl': {
          px: '$4',
          flexDirection: 'row',
        },
      }}
    >
      <Flex
        as="fieldset"
        direction="column"
        css={{
          pr: '$8',

          border: 'none',

          '@bp-xl': {
            w: 230,
            maxWidth: 400,
          },
        }}
      >
        <Text
          as="legend"
          size="lg"
          css={{ mb: '$4', d: 'inline-flex', gap: '$4', alignItems: 'center' }}
        >
          {!!icon && (
            <i>
              <Icon name={icon} />
            </i>
          )}
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

      <Flex
        direction="column"
        gap="5"
        css={{
          w: '$full',
          '@bp-md': {
            px: '$6',
          },
          '@bp-xl': { pr: '$1', px: '$0' },
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default SectionBlock;
