import React, { useState } from 'react';
import NextLink from 'next/link';

import {
  AdminLayout,
  Flex,
  Box,
  Text,
  IconButton,
  MenuCategoryCard,
  Grid,
  ToggleGroup,
  ToggleGroupItem,
  Icon,
  Tooltip,
} from 'components';

import { data as categories } from './mock';

const Dashboard = () => {
  const [viewPreference, setViewPreference] = useState('card');

  return (
    <AdminLayout>
      <Box css={{ pb: '$8' }}>
        <Flex justify="between" fullWidth css={{ p: '$1' }}>
          <Text
            as="h1"
            size="lg"
            weight="semibold"
            // color="subdued"
            css={{ mt: '$2' }}
          >
            Cardápio
          </Text>

          <Flex justify="end" gap={8}>
            <ToggleGroup
              type="single"
              defaultValue="card"
              value={viewPreference}
              onValueChange={(value) => {
                if (value) setViewPreference(value);
              }}
              aria-label="Text alignment"
            >
              <ToggleGroupItem value="card" aria-label="Ver formato grid">
                <Tooltip content="Ver em formato grid">
                  <Icon name="cards" />
                </Tooltip>
              </ToggleGroupItem>
              <ToggleGroupItem value="table" aria-label="Ver formato tabela">
                <Tooltip content="Ver em formato lista">
                  <Icon name="table" />
                </Tooltip>
              </ToggleGroupItem>
            </ToggleGroup>

            <Tooltip content="Adicione nova categoria" align="end">
              <IconButton
                icon="plus"
                ariaLabel="Adicione nova categoria"
                onClick={() => ''}
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Text color="subdued" size="sm" css={{ mb: '$6' }}>
          Configure categorias e defina o seu cardápio.
        </Text>

        <Grid
          gap="8"
          css={{
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',

            '@bp-md': {
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            },

            '@bp-lg': {
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            },

            '@bp-xl': {
              gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
            },
          }}
        >
          {categories.length > 1 ? (
            categories.map((category) => {
              return viewPreference === 'card' ? (
                <MenuCategoryCard
                  as={NextLink}
                  href={`/menu/${category.id}`}
                  key={category.id}
                  title={category.name}
                  count={category.products.length}
                  imageURL={category.image_url}
                  description={category.description}
                  isActive={category.isActive}
                />
              ) : (
                <div>table</div>
              );
            })
          ) : (
            <MenuCategoryCard
              variant="add"
              href="/"
              title="Adicione uma nova categoria ao seu cardápio"
            />
          )}
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default Dashboard;
