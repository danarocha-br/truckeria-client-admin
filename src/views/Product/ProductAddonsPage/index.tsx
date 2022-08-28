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
  Badge,
  Box,
  Button,
  Dropdown,
  DropdownItem,
  Flex,
  Layout,
  Icon,
  IconButton,
  Link,
  Page,
  Table,
  Text,
  Tooltip,
} from 'components';

import { data as groups } from './mock';
import { formatCurrency } from 'utils/formatCurrency';
import { darkTheme } from '../../../../stitches.config';
import { Product } from '..';

type ProductAddon = {
  id?: string;
  name: string;
  internal_name?: string;
  title?: string;
  price?: number;
  /** type: 'multi' | 'single' */
  type: string;
  groups?: Product[] | number;
};

function ProductAddonsPage() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<ProductAddon>[]>(
    () => [
      {
        accessorKey: 'name',
        cell: (info) => (
          <Flex direction="column" justify="center" css={{ pl: '$6' }}>
            <NextLink
              href={`/products/addons/${info.row.original.id}`}
              passHref
            >
              <Text
                as="a"
                href={`/products/addons/${info.row.original.id}`}
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
          </Flex>
        ),
        header: 'Nome do grupo',
      },
      {
        accessorKey: 'internal_name',
        header: 'Nome interno',
        cell: (info) => `[${info.getValue()}]` || '__',
      },
      {
        accessorKey: 'title',
        header: 'Título',
        cell: (info) => info.getValue() || '__',
        minSize: 300,
      },
      {
        accessorKey: 'type',
        header: 'Tipo',
        cell: (info) => (
          <Badge
            label={info.getValue<string>()}
            color={info.getValue<string>() === 'single' ? 'dark' : 'brand'}
          />
        ),
      },
      {
        accessorKey: 'price',
        header: 'Valor total',
        cell: (info) => (
          <Badge label={formatCurrency(info.getValue<number>())} color="dark" />
        ),
      },
      {
        accessorKey: 'products',
        header: 'Produtos',
        cell: (info) =>
          info.getValue<Product[]>().length >= 1
            ? info.getValue<Product[]>().length +
              `${info.getValue<Product[]>().length > 1 ? ' opções' : ' opção'} `
            : '___',
      },

      {
        accessorKey: 'actions',
        header: '',
        // size: -1,
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
    data: groups,
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
          />
          <Link
            as={NextLink}
            href="/products/addons"
            label="Grupo de adicionais"
            variant="page-header"
            isActive
          />

          <Flex justify="end" gap={6}>
            <Tooltip content="Adicione novo produto" align="end">
              <IconButton
                icon="plus"
                ariaLabel="Adicione novo produto"
                onClick={() => ''}
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Layout>
          <TableView />
        </Layout>
      </Box>
    </Page>
  );
}

export default ProductAddonsPage;
