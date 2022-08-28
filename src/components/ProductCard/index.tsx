import React, { useMemo } from 'react';
import NextLink from 'next/link';

import * as S from './styles';
import { Text } from 'components/Text';
import { AspectRatio } from 'components/AspectRatio';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import { Badge } from 'components/Badge';

import { formatCurrency } from 'utils/formatCurrency';
import { Icon } from 'components/Icon';
import { Tooltip } from 'components/Tooltip';
import { Button } from 'components/Button';
import { Dropdown, DropdownItem } from 'components/Dropdown';

export type ProductCardProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof NextLink;
  title: string;
  imageURL?: string;
  href: string;
  description?: string;
  price: number;
  badges?: string[];
  internal_barcode?: number;
  internal_name?: string | number;
  isActive?: boolean;
  variant?: 'primary' | 'add';
  asFeatured?: boolean;
  asNew?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ProductCard = ({
  title,
  as,
  imageURL,
  href,
  description,
  price,
  badges,
  isActive = true,
  asFeatured,
  internal_barcode,
  internal_name,
  asNew,
  // variant = 'primary',
  onEdit,
  onDelete,
  ...props
}: ProductCardProps) => {
  const Component = as || React.Fragment;

  const badgesLabel = useMemo(() => {
    return badges && badges.length - 3;
  }, [badges]);

  return (
    <Component href={href} passHref>
      <S.Container href={href} {...props}>
        <Flex align="center" gap="1" fullWidth css={{ position: 'absolute' }}>
          {asFeatured && (
            <S.ActiveBadge>
              <Icon name="starFilled" color="onInteractive" size="xs" />
            </S.ActiveBadge>
          )}
          {asNew && <S.ActiveBadge>NOVO</S.ActiveBadge>}
        </Flex>

        {/** Actions */}
        <Flex
          className="card__actions"
          fullWidth
          justify="end"
          gap="0"
          css={{ position: 'absolute', top: 6, right: '$1', zIndex: 2 }}
        >
          <Tooltip content="Edite produto">
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
                <DropdownItem onSelect={onDelete}>
                  <Icon name="trash" />
                  Deletar
                </DropdownItem>
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

        <AspectRatio
          imageURL={imageURL ? imageURL : '/img/bg_empty_cards.png'}
          imageALT="Foto do produto"
          ratio={16 / 14}
          css={{
            borderRadius: 9,
            bg: '$neutral200',
            filter: `${imageURL ? 'initial' : 'grayscale(1)'}`,
            h: 140,
          }}
        />

        <Text
          color="contrast"
          weight="medium"
          css={{
            px: '$1',
            overflow: 'hidden',
            d: '-webkit-box',
            '-webkit-line-clamp': 2,
            '-webkit-box-orient': 'vertical',
          }}
        >
          {title}
        </Text>

        {!!internal_name && (
          <Text
            color="contrast"
            weight="medium"
            size="tiny"
            css={{
              opacity: 0.5,
              px: '$1',
              mt: '$-2',
            }}
          >
            [{internal_name}]
          </Text>
        )}

        <Text
          size="sm"
          css={{
            px: '$1',
            overflow: 'hidden',
            d: '-webkit-box',
            '-webkit-line-clamp': 3,
            '-webkit-box-orient': 'vertical',
          }}
        >
          {description}
        </Text>

        <Flex direction="column" fullWidth>
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

          <Flex align="center" justify="between" fullWidth css={{ px: '$1' }}>
            <S.Tag>{formatCurrency(price)}</S.Tag>

            {!!internal_barcode && (
              <Text
                color="contrast"
                weight="medium"
                size="tiny"
                css={{
                  opacity: 0.6,
                  px: '$1',
                }}
              >
                {internal_barcode}
              </Text>
            )}
          </Flex>

          <Flex
            align="center"
            justify="between"
            gap="0"
            css={{
              transition: '$slow',

              '&:hover': {
                '& .badge-food': {
                  ml: 0,
                },
              },
            }}
          >
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
                whiteSpace: 'nowrap',
              }}
            >
              <Icon
                name={isActive === true ? 'checkCircle' : 'closeSquare'}
                color={isActive === true ? 'success' : 'danger'}
                size="xs"
              />
              Produto {isActive === true ? 'ativo' : 'inativo'}
            </Text>

            <Flex
              align="center"
              justify="end"
              gap="0"
              css={{
                transition: '$slow',

                '&:hover': {
                  '& .badge-food': {
                    ml: 0,
                  },
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
                      variant="food"
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
          </Flex>
        </Flex>
      </S.Container>
    </Component>
  );
};
