import React, { useMemo } from 'react';

import { Badge, Box, Flex, Tag, Text, Tooltip } from 'components';
import Image from 'next/image';
import { colors } from 'styles/tokens';
import { formatCurrency } from 'utils/formatCurrency';
import { FOOD_TAGS } from 'constants/index';

type ProductCardBlockProps = {
  data: {
    menu_category_id?: string[];
    name: string;
    image_url?: string;
    description?: string;
    price: number;
    product_type: string;
    product_category?: string[];
    tags?: string[];
    calories?: number;
    product_weight?: number;
    badges?: string[];
    isActive?: boolean;
    direct_sale: boolean;
    display_featured: boolean;
    display_new_item: boolean;
  };
};

const ProductCardBlock = ({ data }: ProductCardBlockProps) => {
  const badgesLabel = useMemo(() => {
    return data.badges && data.badges.length - 3;
  }, [data.badges]);

  return (
    <>
      <Box css={{ position: 'relative' }}>
        <Image
          src={'/img/bg_empty_cards.png'}
          alt="Foto do produto"
          height={300}
          width={600}
          objectFit="cover"
          style={{
            borderRadius: 12,
            backgroundColor: colors.neutral[100],
            filter: `${data.image_url ? 'initial' : 'grayscale(1)'}`,
          }}
        />

        <Flex css={{ position: 'absolute', top: '$3', left: '$3' }}>
          <Badge
            icon="starFilled"
            ariaLabel="Produto em destaque"
            variant="icon"
            color="neutral"
            onDark
          />
          <Badge label="Novo" ariaLabel="Produto novo" color="neutral" onDark />
        </Flex>
      </Box>

      <Text as="h1" color="contrast" size="lg" weight="medium">
        {data.name}
      </Text>
      <Text as="p" color="contrast-subdued">
        {data.description}
      </Text>

      <Flex justify="between" css={{ borderBottom: '1px solid $neutral100' }}>
        {data.product_weight && (
          <Text color="contrast">{data.product_weight}g</Text>
        )}
        <Box
          css={{ borderRight: '1px solid $neutral100', h: '$8' }}
          aria-hidden="true"
        />
        {data.calories && <Text color="contrast">{data.calories}kcal</Text>}
        <Box
          css={{ borderRight: '1px solid $neutral100', h: '$8' }}
          aria-hidden="true"
        />
        <Badge
          variant="default"
          label={formatCurrency(data.price)}
          ariaLabel="Produto novo"
        />
      </Flex>

      <Flex css={{ borderBottom: '1px solid $neutral100', pb: '$5' }}>
        <Flex
          align="center"
          gap="0"
          css={{
            transition: '$slow',

            '&:hover': {
              '& .badge-food': {
                ml: 6,
              },
            },
          }}
        >
          {!!data.badges &&
            data.badges
              .map((item: string, i: number) => (
                <Tooltip
                  key={i}
                  content={
                    FOOD_TAGS.find((tag: { key: string }) => tag.key === item)
                      ?.value || ''
                  }
                >
                  <Badge
                    className="badge-food"
                    ariaLabel={item}
                    foodTag={item}
                    css={{
                      ml: -2,
                      transition: '$slow',
                      transform: 'scale(1.2)',
                    }}
                    variant="food"
                  />
                </Tooltip>
              ))
              .slice(0, 3)}

          {data.badges && data.badges?.length > 3 && (
            <Badge
              className="badge-food"
              label={`+${badgesLabel}`}
              variant="circle"
              color="neutral"
              css={{ ml: -2, transition: '$slow', transform: 'scale(1.2)' }}
            />
          )}
        </Flex>

        <Tag label={data.product_type} color="contrast" />
      </Flex>
    </>
  );
};

export default ProductCardBlock;
