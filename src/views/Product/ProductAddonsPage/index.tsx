import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { RadiobuttonIcon } from '@radix-ui/react-icons';
import { transparentize } from 'polished';

import {
  Badge,
  Box,
  Button,
  Flex,
  Layout,
  IconButton,
  Link,
  Page,
  Text,
  Tooltip,
  Accordion,
  AccordionItem,
} from 'components';

import { IProduct } from '../';
import { formatCurrency } from 'utils/formatCurrency';
import { darkTheme } from '../../../../stitches.config';
import { colors } from 'styles/tokens';

import { data as groups } from './mock';

const MultiProductsList = ({
  image_URL,
  name,
  price,
  internal_name,
}: IProduct) => (
  <Flex
    gap="6"
    align="center"
    css={{
      p: '$3',
      bg: '$surface-base-default',
      boxShadow: `0 0 0 2px $colors$background-subdued`,
      borderRadius: '$xs',
      mb: '$3',
    }}
  >
    <Image
      src={image_URL ? image_URL : '/img/bg_empty_cards.png'}
      alt="Foto do produto"
      height={45}
      width={45}
      objectFit="cover"
      style={{
        borderRadius: 4,
        backgroundColor: colors.neutral[100],
        filter: `${image_URL ? 'initial' : 'grayscale(1)'}`,
      }}
    />
    <Text css={{ whiteSpace: 'nowrap' }}>{name}</Text>
    <Text size="xs" color="subdued" css={{ whiteSpace: 'nowrap' }}>
      [{internal_name}]
    </Text>
    <Flex justify="end" css={{ mr: '$3' }}>
      <Text>{formatCurrency(price)}</Text>
    </Flex>
  </Flex>
);

const SingleProductList = ({ name }: IProduct) => (
  <Flex
    gap="6"
    align="center"
    css={{
      p: '$3',
      bg: '$surface-base-default',
      boxShadow: `0 0 0 2px $colors$background-subdued`,
      borderRadius: '$xs',
      mb: '$3',
    }}
  >
    <RadiobuttonIcon />
    <Text>{name}</Text>
  </Flex>
);

function ProductAddonsPage() {
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
          <Flex direction="column" gap="8" css={{ mt: '$4' }}>
            {groups &&
              groups.map((group) => (
                <Accordion defaultValue={group.id}>
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
                            group.products.length > 1
                              ? group.products.length + ' items'
                              : group.products.length + ' item'
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
                      <Text size="sm" css={{ whiteSpace: 'nowrap' }}>
                        Valor total: {` `}
                        <b>{formatCurrency(group.price)}</b>
                      </Text>

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
                              color: '$text-default',
                              bg: '$surface-base-subdued',
                              p: '$1',
                              '&:hover': {
                                bg: '$surface-base-hover',
                              },
                              [`.${darkTheme} &`]: {
                                color: '$text-onInteractive',
                                bg: transparentize(0.5, colors.neutral[700]),
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
                              color: '$text-default',
                              bg: '$surface-base-subdued',
                              p: '$1',
                              '&:hover': {
                                bg: '$surface-base-hover',
                              },
                              [`.${darkTheme} &`]: {
                                color: '$text-onInteractive',
                                bg: transparentize(0.5, colors.neutral[700]),
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
                              bg: '$surface-base-subdued',
                              p: '$1',
                              '&:hover': {
                                bg: '$surface-base-hover',
                              },
                              [`.${darkTheme} &`]: {
                                color: '$text-onInteractive',
                                bg: transparentize(0.5, colors.neutral[700]),
                              },
                            }}
                          />
                        </Tooltip>
                      </Flex>
                    </Flex>
                    {group.products &&
                      group.products.map((product) =>
                        group.type === 'single' ? (
                          <SingleProductList
                            key={product.id}
                            name={product.name}
                          />
                        ) : (
                          <MultiProductsList
                            key={product.id}
                            image_URL={product.image_url}
                            name={product.name}
                            price={product.price}
                            internal_name={product.internal_name}
                          />
                        )
                      )}
                  </AccordionItem>
                </Accordion>
              ))}
          </Flex>
        </Layout>
      </Box>
    </Page>
  );
}

export default ProductAddonsPage;
