import React from 'react';

import {
  AdminLayout,
  Flex,
  Box,
  Text,
  IconButton,
  MenuCategoryCard,
  Grid,
} from 'components';

import { data as categories } from './mock';

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
      <Box css={{ pb: '$8' }}>
        <Flex justify="between" fullWidth css={{ p: '$1', mb: '$6' }}>
          <Text
            as="h1"
            size="lg"
            weight="semibold"
            color="subdued"
            css={{ mt: '$2' }}
          >
            Cardápio
          </Text>

          <IconButton
            icon="plus"
            ariaLabel="Adicione nova categoria"
            onClick={() => ''}
          />
        </Flex>

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
            categories.map((category) => (
              <MenuCategoryCard
                key={category.id}
                title={category.name}
                count={category.products.length}
                imageURL={category.image_url}
                description={category.description}
                isActive={category.isActive}
              />
            ))
          ) : (
            <MenuCategoryCard
              variant="add"
              title="Adicione uma nova categoria ao seu cardápio"
            />
          )}
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default Dashboard;
