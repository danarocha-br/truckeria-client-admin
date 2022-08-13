import React, { useState } from 'react';
import NextLink from 'next/link';

import {
  AdminLayout,
  Box,
  Flex,
  Grid,
  Icon,
  IconButton,
  ProductCard,
  Text,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
} from 'components';

import { data as products } from './mock';

const Product = () => {
  const [viewPreference, setViewPreference] = useState('card');

  return (
    <AdminLayout>
      <Box css={{ pb: '$8' }}>
        <Flex justify="between" fullWidth css={{ p: '$1' }}>
          <Text
            as="h1"
            size="lg"
            weight="semibold"
            css={{ mt: '$2', whiteSpace: 'nowrap' }}
          >
            Produtos e materiais
          </Text>

          <Flex justify="end" gap={6}>
            <ToggleGroup
              type="single"
              defaultValue="card"
              value={viewPreference}
              onValueChange={(value) => {
                if (value) setViewPreference(value);
              }}
              aria-label="Escolha o formato de visualização de preferência"
            >
              <ToggleGroupItem value="card" aria-label="Ver em formato grid">
                <Tooltip content="Ver em formato grid">
                  <Icon name="cards" />
                </Tooltip>
              </ToggleGroupItem>
              <ToggleGroupItem value="table" aria-label="Ver em formato tabela">
                <Tooltip content="Ver em formato lista">
                  <Icon name="table" />
                </Tooltip>
              </ToggleGroupItem>
            </ToggleGroup>

            <Tooltip content="Adicione novo produto" align="end">
              <IconButton
                icon="plus"
                ariaLabel="Adicione novo produto"
                onClick={() => ''}
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Text
          color="subdued"
          size="sm"
          css={{ mb: '$6', mt: '$4', '@bp-md': { mt: '$0' } }}
        >
          Configure categorias e defina o seu cardápio.
        </Text>

        <Grid
          gap={viewPreference === 'card' ? '8' : '3'}
          css={{
            gridTemplateColumns:
              viewPreference === 'card'
                ? 'repeat(1, minmax(0, 1fr))'
                : 'repeat(1, minmax(0, 1fr))',

            '@bp-md': {
              gridTemplateColumns:
                viewPreference === 'card'
                  ? 'repeat(2, minmax(0, 1fr))'
                  : 'repeat(1, minmax(0, 1fr))',
            },

            '@bp-lg': {
              gridTemplateColumns:
                viewPreference === 'card'
                  ? 'repeat(4, minmax(0, 1fr))'
                  : 'repeat(1, minmax(0, 1fr))',
            },

            '@bp-xl': {
              gridTemplateColumns:
                viewPreference === 'card'
                  ? 'repeat(5, minmax(0, 1fr))'
                  : 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
          {products &&
            products.length >= 1 &&
            products.map((product) => (
              <ProductCard
                as={NextLink}
                key={product.id}
                href={`/products/${product.id}`}
                title={product.name}
                description={product.description}
                price={product.price}
                isActive={product.isActive}
                badges={product.badges}
                asFeatured={product.display_featured}
                asNew={product.display_new_item}
                internal_barcode={product.internal_barcode}
                internal_name={product.internal_name}
              />
            ))}
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default Product;
