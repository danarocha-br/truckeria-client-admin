import React, { useRef, useState } from 'react';
import NextLink from 'next/link';
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Dropdown,
  DropdownItem,
  Flex,
  Icon,
  IconButton,
  Layout,
  Link,
  Page,
  ProductCard,
  Table,
  Text,
  ToggleGroup,
  Tooltip,
} from 'components';

import { data as products } from './mock';
import { formatCurrency } from 'utils/formatCurrency';
import { darkTheme } from '../../../stitches.config';

export type Product = {
  id: string;
  category_id: string;
  name: string;
  internal_name?: string;
  image_URL?: string | unknown;
  description?: string;
  price: number;
  margin: number;
  cost_price: number;
  product_unity: string;
  is_active?: boolean;
  barcode?: number | string;
  badges?: string[];
  default_quantity: number;
  max_quantity: number;
  calories: number;
  internal_barcode: number;
  item_stock_quantity: number;
  display_featured: boolean;
  display_new_item: boolean;
  direct_sale: boolean;
};

function Product() {
  const [viewPreference, setViewPreference] = useState('card');
  const [sorting, setSorting] = useState<SortingState>([]);

  const handlePreferenceChange = (value: string) => {
    if (value) setViewPreference(value);
  };

  const columns = React.useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'image_URL',
        header: 'Produto',
        size: 100,
        maxSize: 100,
        cell: (info) => (
          <AspectRatio
            className="product__cover"
            imageURL={info.getValue<string>() || '/img/bg_empty_cards.png'}
            imageALT="Categoria de menu"
            ratio={8 / 8}
            css={{
              bg: '$neutral500',
              filter: `${info.getValue() ? 'initial' : 'grayscale(1)'}`,
              h: 100,
              d: 'none',

              '@bp-md': {
                d: 'block',
                minWidth: '$11',
                maxWidth: '$11',
              },
              '@bp-lg': {
                d: 'block',
                minWidth: '$12',
                maxWidth: '$12',
              },
            }}
          />
        ),
      },

      {
        accessorKey: 'name',
        cell: (info) => (
          <Flex
            direction="column"
            justify="center"
            css={{
              h: '$full',

              '@bp-md': {
                minWidth: '15rem',
              },
            }}
          >
            <NextLink href={`/products/${info.row.original.id}`} passHref>
              <Text
                as="a"
                href={`/products/${info.row.original.id}`}
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
                {info.getValue<string>()}
              </Text>
            </NextLink>

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
              {info.row.original.description}
            </Box>
          </Flex>
        ),
        header: 'Nome do produto',
      },
      {
        accessorKey: 'internal_name',
        header: 'Nome interno',
        cell: (info) => `[${info.getValue()}]` || '__',
      },
      {
        accessorKey: 'internal_barcode',
        header: 'Código interno',
        cell: (info) => info.getValue() || '__',
      },
      {
        accessorKey: 'barcode',
        header: 'Código de barras',
      },
      {
        accessorKey: 'is_active',
        header: 'Status',
        size: 40,
        cell: (info) => (
          <Icon
            color={info.getValue() ? 'success' : 'danger'}
            name={info.getValue() ? 'checkCircle' : 'closeSquare'}
            css={{ opacity: 0.7 }}
          />
        ),
      },
      {
        accessorKey: 'product_type',
        header: 'Tipo do produto',
      },
      {
        accessorKey: 'price',
        header: 'Preço de venda',
        cell: (info) => (
          <Badge label={formatCurrency(info.getValue<number>())} color="dark" />
        ),
      },
      {
        accessorKey: 'cost_price',
        header: 'Preço de custo',
        cell: (info) => (
          <Badge label={formatCurrency(info.getValue<number>())} color="dark" />
        ),
      },
      {
        accessorKey: 'badges',
        header: 'Selos',
        cell: (info) => (
          <Flex
            align="center"
            justify="end"
            gap="0"
            css={{
              transition: '$slow',
              w: '7rem',
              minWidth: '7rem',
              maxWidth: '12rem',

              '&:hover': {
                '& .badge-food': {
                  ml: 1,
                },
              },
            }}
          >
            {info
              .getValue<string[]>()
              .map((item: string, i: number) => (
                <Badge
                  className="badge-food"
                  key={i}
                  foodTag={item}
                  css={{ ml: -6, transition: '$slow' }}
                  variant="food"
                />
              ))
              .slice(0, 3)}
          </Flex>
        ),
      },
      {
        accessorKey: 'actions',
        header: '',
        size: -1,
        cell: () => (
          <Flex
            gap="1"
            align="center"
            justify="center"
            className="table__actions"
            css={{
              px: '$4',
              transform: 'translateX(8px)',
              transition: '$slow',
            }}
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
                onClick={() => ''}
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
                  <DropdownItem onSelect={() => ''}>
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
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: products,
    //@ts-ignore
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const CardView = () => {
    return (
      <>
        {products.map((product) => (
          <ProductCard
            as={NextLink}
            key={product.id}
            href={`/products/${product.id}`}
            title={product.name}
            description={product.description}
            price={product.price}
            isActive={product.is_active}
            badges={product.badges}
            asFeatured={product.display_featured}
            asNew={product.display_new_item}
            internal_barcode={product.internal_barcode}
            internal_name={product.internal_name}
          />
        ))}
      </>
    );
  };

  const TableView = () => {
    return (
      <Table
        table={table}
        tableRef={tableContainerRef}
        rows={rows}
        css={{ pt: '$2' }}
      />
    );
  };

  return (
    <Page>
      <Box css={{ pb: '$8' }}>
        <Flex
          justify="between"
          align="center"
          gap="8"
          fullWidth
          css={{ p: '$1', mb: '$7' }}
        >
          <Link
            as={NextLink}
            href="/products"
            label="Produtos e materiais"
            variant="page-header"
            isActive
          />
          <Link
            as={NextLink}
            href="/products/addons"
            label="Grupo de adicionais"
            variant="page-header"
          />

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

            <Tooltip content="Adicione novo produto" align="end">
              <IconButton
                icon="plus"
                ariaLabel="Adicione novo produto"
                onClick={() => ''}
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Layout appearance={viewPreference === 'card' ? 'grid' : 'list'}>
          {viewPreference === 'card' ? <CardView /> : <TableView />}
        </Layout>
      </Box>
    </Page>
  );
}

export default Product;
