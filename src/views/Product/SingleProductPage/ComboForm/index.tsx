import React from 'react';
import Link from 'next/link';
import { transparentize } from 'polished';

import {
  Accordion,
  AccordionItem,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  IconButton,
  Text,
  Tooltip,
} from 'components';

import { data as product } from '../mock';

import {
  MultiProductsList,
  SingleProductList,
} from 'views/Product/ProductAddonsPage';
import { formatCurrency } from 'utils/formatCurrency';
import { colors } from 'styles/tokens';

const ComboForm = () => {
  return (
    <Box
      css={{
        h: '$full',
        mt: '$4',
        px: '$4',

        '@bp-md': { pr: '$7' },
      }}
    >
      {/** Toolbar */}
      <Flex justify="between" align="center" css={{ mb: '$4' }}>
        <Breadcrumb ariaLabel="Navegação">
          <BreadcrumbItem as={Link} href="/products" label="Produtos" />
          <BreadcrumbItem
            as={Link}
            href={`/products/${product.id}`}
            label={product.name}
            isActive
          />
        </Breadcrumb>

        <Button
          size="sm"
          label="Adicionar passo"
          variant="primary"
          // disabled={!isValid}
          // loading={isSubmitting}
        />
      </Flex>

      <Flex
        direction="column"
        gap="8"
        css={{
          mt: '$4',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: '$base',
            animationDuration: '400ms',
            animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'width',
          },

          '@bp-lg': {
            // w: addNewAddonPanel.visible ? '61.5%' : '100%',
          },
        }}
      >
        {product.additional_items &&
          product.additional_items.map((group) => (
            <Accordion
              key={group.id}
              defaultValue={group.id}
              // css={{ bg: '$surface-base-hover' }}
            >
              <AccordionItem
                value={group.id}
                title={group.name}
                headerSlot={
                  <Flex
                    align="center"
                    justify="end"
                    gap="3"
                    css={{
                      transform: 'scale(0.86)',
                      transformOrigin: 'right',
                      position: 'relative',
                    }}
                  >
                    <Badge
                      label={`${
                        group.items.length > 1
                          ? group.items.length + ' items'
                          : group.items.length + ' item'
                      }`}
                      css={{ mr: '$3', w: '$12' }}
                    />
                    <Badge
                      label={group.type}
                      color={group.type === 'multi' ? 'brand' : 'dark'}
                      css={{ w: '$12' }}
                    />
                  </Flex>
                }
              >
                <Flex align="center" css={{ mb: '$2' }}>
                  {group.type === 'multi' && (
                    <>
                      <Text size="sm" css={{ whiteSpace: 'nowrap' }}>
                        Valor total: {` `}
                        <b>{formatCurrency(group.price)}</b>
                      </Text>
                    </>
                  )}

                  <Flex
                    justify="end"
                    css={{
                      transform: 'scale(0.8)',
                      transformOrigin: 'right top',
                      position: 'relative',
                    }}
                  >
                    <Tooltip content="Adicione novo item">
                      <Button
                        icon="plus"
                        label="adicione"
                        variant="icon"
                        size="sm"
                        css={{
                          p: '$1',

                          [`.light-theme &`]: {
                            color: '$text-default',
                            bg: '$action-transparent-subdued',
                          },
                        }}
                      />
                    </Tooltip>

                    <Tooltip content="Edite esse grupo">
                      <Button
                        icon="pencil"
                        label="edite"
                        variant="icon"
                        size="sm"
                        css={{
                          p: '$1',

                          [`.light-theme &`]: {
                            color: '$text-default',
                            bg: '$action-transparent-subdued',
                          },
                        }}
                      />
                    </Tooltip>

                    <Tooltip content="Delete esse grupo">
                      <Button
                        icon="trash"
                        label="delete"
                        variant="icon"
                        size="sm"
                        css={{
                          color: '$text-default',
                          p: '$1',

                          [`.dark-theme &`]: {
                            color: '$text-onInteractive',
                            bg: transparentize(0.5, colors.neutral[700]),
                            '&:hover': {
                              bg: '$surface-base-hover',
                            },
                          },
                          [`.light-theme &`]: {
                            color: '$text-primary',
                            bg: '$action-transparent-subdued',
                          },
                        }}
                      />
                    </Tooltip>
                  </Flex>
                </Flex>

                {group.items && group.items.length >= 1 ? (
                  group.items.map((product) =>
                    group.type === 'single' ? (
                      <SingleProductList key={product.id} name={product.name} />
                    ) : (
                      <MultiProductsList
                        key={product.id}
                        image_URL={product.image_url}
                        name={product.name}
                        price={product.price}
                        internal_name={product.internal_name}
                      />
                    )
                  )
                ) : (
                  <Flex
                    align="center"
                    justify="center"
                    direction="column"
                    gap="6"
                    css={{
                      border: '2px dashed $surface-base-default',
                      p: '$6',
                      borderRadius: '$xs',
                      [`.light-theme &`]: {
                        bg: '$neutral100',
                      },
                    }}
                  >
                    <IconButton icon="plus" ariaLabel="Adicione produtos" />

                    <Text color="subdued">Adicione produtos ao seu grupo.</Text>
                  </Flex>
                )}
              </AccordionItem>
            </Accordion>
          ))}
      </Flex>
    </Box>
  );
};

export default ComboForm;
