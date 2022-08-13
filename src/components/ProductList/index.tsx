import React, { useMemo } from 'react';
import NextLink from 'next/link';

import * as S from './styles';
import { AspectRatio } from 'components/AspectRatio';
import { Flex } from 'components/Flex';
import { Text } from 'components/Text';
import { Box } from 'components/Box';
import { Badge } from 'components/Badge';
import { formatCurrency } from 'utils/formatCurrency';
import { Tooltip } from 'components/Tooltip';
import { Button } from 'components/Button';
import { darkTheme } from '../../../stitches.config';
import { Dropdown, DropdownItem } from 'components/Dropdown';
import { Icon } from 'components/Icon';

export type ProductListProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof NextLink;
  title: string;
  imageURL?: string;
  href: string;
  description?: string;
  price: number;
  cost_price: number;
  badges?: string[];
  internal_barcode?: number;
  barcode?: number;
  internal_name?: string | number;
  isActive?: boolean;
  variant?: 'primary' | 'add';
  asFeatured?: boolean;
  asNew?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export const ProductList = ({
  title,
  as,
  imageURL,
  href,
  description,
  price,
  cost_price,
  badges,
  barcode,
  isActive = true,
  internal_barcode,
  internal_name,
  // variant = 'primary',
  onEdit,
  onDelete,
  ...props
}: ProductListProps) => {
  const Component = as || React.Fragment;

  const badgesLabel = useMemo(() => {
    return badges && badges.length - 3;
  }, [badges]);

  return (
    <S.Container {...props}>
      <AspectRatio
        className="product__cover"
        imageURL={imageURL ? imageURL : '/img/bg_empty_cards.png'}
        imageALT="Categoria de menu"
        ratio={8 / 8}
        css={{
          bg: '$neutral500',
          filter: `${imageURL ? 'initial' : 'grayscale(1)'}`,
          w: '$5',
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

      <Flex
        direction="column"
        justify="center"
        css={{
          h: '$full',

          '@bp-md': {
            minWidth: '15rem',
            px: '$6',
          },
        }}
      >
        <Component href={href} passHref>
          <Text
            as="a"
            href={href}
            size="lg"
            weight="medium"
            css={{
              color: '$text-default',
              outline: 'none',
              textDecoration: 'none',
              overflow: 'hidden',
              d: '-webkit-box',
              '-webkit-line-clamp': 1,
              '-webkit-box-orient': 'vertical',
            }}
          >
            {title}
          </Text>
        </Component>

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

      <S.TableItem>[{internal_name || '__'} ]</S.TableItem>
      <S.TableItem>{internal_barcode || '__'}</S.TableItem>
      <S.TableItem>{barcode || '__'}</S.TableItem>
      <S.TableItem>
        {
          <Icon
            color={isActive ? 'success' : 'danger'}
            name={isActive ? 'checkCircle' : 'closeSquare'}
            css={{ opacity: 0.7 }}
          />
        }
      </S.TableItem>
      <S.TableItem>
        <S.Tag>{formatCurrency(price)}</S.Tag>
      </S.TableItem>
      <S.TableItem>
        <S.Tag>{formatCurrency(cost_price)}</S.Tag>
      </S.TableItem>

      <Flex
        align="center"
        justify="end"
        gap="0"
        css={{
          transition: '$slow',
          w: '11rem',
          minWidth: '11rem',
          maxWidth: '12rem',

          '&:hover': {
            '& .badge-food': {
              ml: 1,
            },
          },

          '@bp-md': {
            px: '$6',
            borderLeft: '2px solid $action-transparent-transparent',
          },
        }}
      >
        {!!badges &&
          badges
            .map((item, i) => (
              <Badge
                className="badge-food"
                key={i}
                foodTag={item}
                css={{ ml: -6, transition: '$slow' }}
              />
            ))
            .slice(0, 3)}

        {badges && badges?.length > 3 && (
          <Badge
            className="badge-food"
            label={`+${badgesLabel}`}
            variant="circle"
            color="neutral"
            css={{ ml: -10, transition: '$slow' }}
          />
        )}
      </Flex>

      {/** Actions */}
      <Flex
        gap="1"
        align="center"
        justify="center"
        className="product-list__actions"
      >
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
    </S.Container>
  );
};
