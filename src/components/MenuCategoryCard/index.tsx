import React from 'react';
import NextLink from 'next/link';

import { Text } from 'components/Text';
import { AspectRatio } from 'components/AspectRatio';
import * as S from './styles';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { Tooltip } from 'components/Tooltip';
import { Dropdown, DropdownItem } from 'components/Dropdown';

export type MenuCategoryCardProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof NextLink;
  title: string;
  count?: number;
  imageURL?: string;
  href: string;
  description?: string;
  isActive?: boolean;
  variant?: 'primary' | 'add';
  onEdit?: () => void;
  onDelete?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const MenuCategoryCard = ({
  title,
  as,
  count = 0,
  imageURL,
  href,
  description,
  isActive = true,
  variant = 'primary',
  onEdit,
  onDelete,
  ...props
}: MenuCategoryCardProps) => {
  const Component = as || React.Fragment;
  return (
    <Component href={href} passHref>
      <S.Container href={href} {...props} variant={variant} tabIndex={0}>
        <Flex
          className="card__actions"
          fullWidth
          justify="end"
          gap="0"
          css={{ position: 'absolute', top: 6, right: '$1', zIndex: 2 }}
        >
          <Tooltip content="Edite categoria">
            <Button
              label="Editar"
              variant="icon"
              icon="pencil"
              size="sm"
              css={{
                color: '$white',
                bg: '$neutral800',
                p: '$1',
                transform: 'scale(0.85)',
                '&:hover': {
                  bg: '$neutral900',
                },
              }}
              onClick={onEdit}
              tabIndex={-1}
            />
          </Tooltip>

          <Tooltip content="Configurações">
            <Button
              label="Configurações"
              variant="icon"
              icon="settings"
              size="sm"
              css={{
                color: '$white',
                bg: '$neutral800',
                p: '$1',
                transform: 'scale(0.85)',
                '&:hover': {
                  bg: '$neutral900',
                },
              }}
              tabIndex={-1}
            />
          </Tooltip>

          <Tooltip content="Outras opções">
            <Dropdown
              items={
                <>
                  <DropdownItem onSelect={onDelete}>
                    <Icon name="trash" />
                    Deletar
                  </DropdownItem>
                </>
              }
            >
              <Button
                label="Mais opções"
                variant="icon"
                icon="options"
                size="sm"
                css={{
                  color: '$white',
                  bg: '$neutral800',
                  p: '$1',
                  transform: 'scale(0.85)',
                  '&:hover': {
                    bg: '$neutral900',
                  },
                }}
                tabIndex={-1}
              />
            </Dropdown>
          </Tooltip>
        </Flex>

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
          css={{ h: '$full', maxHeight: 84, color: 'inherit' }}
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
                fontSize: '$sm',
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
                  opacity: isActive === true ? 0.8 : 0.7,
                  px: '$1',
                  d: 'inline-flex',
                  alignItems: 'center',
                  gap: '$2',
                }}
              >
                <Icon
                  name={isActive === true ? 'checkCircle' : 'closeSquare'}
                  color={isActive === true ? 'success' : 'danger'}
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
    </Component>
  );
};
