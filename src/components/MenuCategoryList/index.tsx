import React from 'react';
import NextLink from 'next/link';

import { AspectRatio } from 'components/AspectRatio';
import { Text } from 'components/Text';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import * as S from './styles';
import { Icon } from 'components/Icon';
import { Tooltip } from 'components/Tooltip';
import { Button } from 'components/Button';
import { Dropdown, DropdownItem } from 'components/Dropdown';
import { darkTheme } from '../../../stitches.config';

export type MenuCategoryListProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof NextLink;
  title: string;
  count?: number;
  imageURL?: string;
  href: string;
  description?: string;
  isActive?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const MenuCategoryList = ({
  title,
  as,
  count = 0,
  imageURL,
  href,
  description,
  isActive = true,
  onEdit,
  onDelete,
  ...props
}: MenuCategoryListProps) => {
  const Component = as || React.Fragment;

  return (
    <Component href={href} passHref>
      <S.Container href={href} {...props} tabIndex={0}>
        <AspectRatio
          imageURL={imageURL ? imageURL : '/img/bg_empty_cards.png'}
          imageALT="Categoria de menu"
          ratio={16 / 16}
          css={{
            borderTopLeftRadius: '$sm',
            borderBottomLeftRadius: '$sm',
            bg: '$surface-base-hover',
            filter: `${imageURL ? 'initial' : 'grayscale(1)'}`,
            w: '$16',
            h: '$11',
            d: 'none',

            '@bp-md': {
              d: 'block',
              minWidth: '$11',
            },
            '@bp-lg': {
              d: 'block',
              minWidth: '$12',
            },
          }}
        />

        <Flex direction="column" css={{ maxHeight: 50 }}>
          <Text size="lg" weight="medium">
            {title}
          </Text>

          <Box
            as="span"
            css={{
              color: '$text-subdued',
              mt: '$-1',
              textAlign: 'left',
              overflow: 'hidden',
              d: '-webkit-box',
              '-webkit-line-clamp': 1,
              '-webkit-box-orient': 'vertical',
            }}
          >
            {description}
          </Box>
        </Flex>

        <Flex
          align="center"
          gap="8"
          fullWidth
          css={{
            justifyContent: 'space-between',

            '@bp-md': {
              justifyContent: 'end',
            },
          }}
        >
          <Text
            color={isActive === true ? 'primary' : 'danger'}
            size="sm"
            weight="medium"
            css={{
              opacity: isActive === true ? 0.7 : 1,
              d: 'inline-flex',
              alignItems: 'center',
              gap: '$2',
            }}
          >
            <Icon
              name={isActive === true ? 'checkCircle' : 'closeSquare'}
              color={isActive === true ? 'current' : 'danger'}
              size="xs"
            />
            Categoria {isActive === true ? 'ativa' : 'inativa'}
          </Text>

          <S.Tag>
            {count} {count > 1 ? 'itens' : 'item'}
          </S.Tag>

          <Flex css={{ w: 'auto' }}>
            <Tooltip content="Edite categoria">
              <Button
                label="Editar"
                variant="icon"
                icon="pencil"
                size="sm"
                css={{
                  color: '$text-default',
                  bg: '$surface-base-subdued',
                  p: '$1',
                  transform: 'scale(0.85)',
                  '&:hover': {
                    bg: '$surface-base-hover',
                  },
                  [`.${darkTheme} &`]: {
                    color: '$text-onInteractive',
                    bg: '$neutral800',
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
                  color: '$text-default',
                  bg: '$surface-base-subdued',
                  p: '$1',
                  transform: 'scale(0.85)',
                  '&:hover': {
                    bg: '$surface-base-hover',
                  },
                  [`.${darkTheme} &`]: {
                    color: '$text-onInteractive',
                    bg: '$neutral800',
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
                    color: '$text-default',
                    bg: '$surface-base-subdued',
                    p: '$1',
                    transform: 'scale(0.85)',
                    '&:hover': {
                      bg: '$surface-base-hover',
                    },
                    [`.${darkTheme} &`]: {
                      color: '$text-onInteractive',
                      bg: '$neutral800',
                    },
                  }}
                  tabIndex={-1}
                />
              </Dropdown>
            </Tooltip>
          </Flex>
        </Flex>
      </S.Container>
    </Component>
  );
};
