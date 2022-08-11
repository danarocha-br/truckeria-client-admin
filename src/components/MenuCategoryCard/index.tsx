import React from 'react';

import { Text } from 'components/Text';
import { AspectRatio } from 'components/AspectRatio';
import * as S from './styles';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import { Icon } from 'components/Icon';

export type MenuCategoryCardProps = {
  title: string;
  count?: number;
  imageURL?: string;
  description?: string;
  isActive?: boolean;
  variant?: 'primary' | 'add';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuCategoryCard = ({
  title,
  count = 0,
  imageURL,
  description,
  isActive = true,
  variant = 'primary',
  ...props
}: MenuCategoryCardProps) => {
  return (
    <S.Container {...props} variant={variant}>
      {variant === 'add' && (
        <>
          <Icon name="plus" size="lg" />
          <Text align="center" size="lg">
            {title}
          </Text>
        </>
      )}

      {variant === 'primary' && (
        <AspectRatio
          imageURL={imageURL ? imageURL : '/img/bg_empty_cards.png'}
          imageALT="Categoria de menu"
          ratio={16 / 14}
          css={{
            borderRadius: 9,
            bg: '$neutral200',
            filter: `${imageURL ? 'initial' : 'grayscale(1)'}`,
            h: 160,
          }}
        />
      )}

      <Flex
        direction="column"
        align="start"
        justify="start"
        css={{ h: '$full', maxHeight: 80, color: 'inherit' }}
      >
        {variant === 'primary' && (
          <Text
            color="contrast"
            size="lg"
            weight="medium"
            css={{
              px: '$1',
            }}
          >
            {title}
          </Text>
        )}

        {variant === 'primary' && description && (
          <Box
            as="span"
            css={{
              px: '$1',
              mt: '$-1',
              textAlign: 'left',
              overflow: 'hidden',
              d: '-webkit-box',
              '-webkit-line-clamp': 3,
              '-webkit-box-orient': 'vertical',
            }}
          >
            {description}
          </Box>
        )}
      </Flex>

      {variant === 'primary' && (
        <Flex direction="column" justify="end" fullWidth>
          <Box
            as="hr"
            role="separator"
            css={{
              all: 'unset',
              bg: '$transparent',
              borderBottom: '1px dashed $colors$neutral200',
              w: '$full',
              mb: '$2',
            }}
          />

          <Flex justify="between" fullWidth>
            <Text
              color={isActive === true ? 'contrast' : 'danger'}
              size="tiny"
              weight="medium"
              css={{
                opacity: isActive === true ? 0.5 : 0.7,
                px: '$1',
                d: 'inline-flex',
                alignItems: 'center',
                gap: '$2',
              }}
            >
              <Icon
                name={isActive === true ? 'checkCircle' : 'close'}
                color={isActive === true ? 'current' : 'danger'}
                size="xs"
              />
              Categoria {isActive === true ? 'ativa' : 'inativa'}
            </Text>
            <S.Tag>
              {count} {count > 1 ? 'itens' : 'item'}
            </S.Tag>
          </Flex>
        </Flex>
      )}
    </S.Container>
  );
};
