import React, { useState } from 'react';

import {
  AdminLayout,
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
} from 'components';

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
      </Box>
    </AdminLayout>
  );
};

export default Product;
