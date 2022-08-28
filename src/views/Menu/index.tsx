import React, { useState } from 'react';
import NextLink from 'next/link';

import {
  Flex,
  Box,
  Text,
  IconButton,
  MenuCategoryCard,
  Page,
  Layout,
  ToggleGroup,
  Icon,
  Tooltip,
  MenuCategoryList,
} from 'components';

import { data as categories } from './mock';

function Dashboard() {
  const [viewPreference, setViewPreference] = useState('card');

  const handlePreferenceChange = (value: string) => {
    if (value) setViewPreference(value);
  };

  return (
    <Page>
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

          <Flex justify="end" gap={6}>
            <ToggleGroup.Root
              type="single"
              defaultValue="card"
              value={viewPreference}
              onValueChange={(value) => handlePreferenceChange(value)}
              aria-label="Escolha o formato de visualização de preferência"
            >
              <ToggleGroup.Item value="card" aria-label="Ver em formato grid">
                <Tooltip content="Ver em formato grid">
                  <Icon name="cards" />
                </Tooltip>
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="table"
                aria-label="Ver em formato tabela"
              >
                <Tooltip content="Ver em formato lista">
                  <Icon name="table" />
                </Tooltip>
              </ToggleGroup.Item>
            </ToggleGroup.Root>

            <Tooltip content="Adicione nova categoria" align="end">
              <IconButton
                icon="plus"
                ariaLabel="Adicione nova categoria"
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

        <Layout appearance={viewPreference === 'card' ? 'grid' : 'list'}>
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
                <MenuCategoryList
                  as={NextLink}
                  href={`/menu/${category.id}`}
                  key={category.id}
                  title={category.name}
                  count={category.products.length}
                  imageURL={category.image_url}
                  description={category.description}
                  isActive={category.isActive}
                />
              );
            })
          ) : (
            <MenuCategoryCard
              variant="add"
              href="/"
              title="Adicione uma nova categoria ao seu cardápio"
            />
          )}
        </Layout>
      </Box>
    </Page>
  );
}

export default Dashboard;
