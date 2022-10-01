import React, { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { RadiobuttonIcon } from '@radix-ui/react-icons';
import { transparentize } from 'polished';
import { DialogDisclosure, useDialogState } from 'reakit';
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
  Dialog,
} from 'components';

import { IProduct } from '../';
import { formatCurrency } from 'utils/formatCurrency';
import { darkTheme } from '../../../../stitches.config';
import { colors } from 'styles/tokens';

import { data as groups } from './mock';
import PanelAddProductAddOn from './PanelAddProductAddOn';
import DialogAddSingleItemToGroup from './DialogAddSingleItemToGroup';

const MultiProductsList = ({
  image_URL,
  name,
  price,
  internal_name,
}: IProduct) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Flex
      gap="6"
      align="center"
      css={{
        p: '$3',
        bg: '$surface-base-default',
        boxShadow: `0 0 0 2px $colors$background-subdued`,
        borderRadius: '$xs',
        mb: '$3',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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

      <Flex
        justify="end"
        css={{
          mr: '$3',
          transition: '$fast',
          // transform: `${isHovered ? 'translateX(-80px)' : 'translateX(0)'}`,
          opacity: `${isHovered ? 0 : 1}`,
        }}
      >
        <Text>{formatCurrency(price)}</Text>
      </Flex>

      {isHovered && (
        <Flex
          css={{
            transform: 'scale(0.8)',
            transformOrigin: 'right top',
            position: 'absolute',
            right: '$2',
            top: '$4',
            w: 'auto',
            transition: '$base',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <Tooltip content="Editar item">
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

          <Tooltip content="Deletar item">
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
      )}
    </Flex>
  );
};

const SingleProductList = ({ name }: IProduct) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Flex
      gap="6"
      align="center"
      css={{
        p: '$3',
        bg: '$surface-base-default',
        boxShadow: `0 0 0 2px $colors$background-subdued`,
        borderRadius: '$xs',
        mb: '$3',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <RadiobuttonIcon />
      <Text>{name}</Text>

      {isHovered && (
        <Flex
          css={{
            transform: 'scale(0.8)',
            transformOrigin: 'right top',
            position: 'absolute',
            right: '$2',
            top: '$3',
            w: 'auto',
            transition: '$base',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <Tooltip content="Editar item">
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

          <Tooltip content="Deletar item">
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
      )}
    </Flex>
  );
};

function ProductAddonsPage() {
  const addNewAddonPanel = useDialogState({});
  const addNewSingleItemToAddonGroupPanel = useDialogState({});
  const removeAddonGroupDialog = useDialogState({});

  return (
    <>
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
              <Tooltip content="Adicione novo grupo" align="end">
                <DialogDisclosure
                  {...addNewAddonPanel}
                  style={{ all: 'unset' }}
                >
                  <IconButton icon="plus" ariaLabel="Adicione novo grupo" />
                </DialogDisclosure>
              </Tooltip>
            </Flex>
          </Flex>

          <Layout>
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
                  w: addNewAddonPanel.visible ? '61.5%' : '100%',
                },
              }}
            >
              {groups &&
                groups.map((group) => (
                  <Accordion key={group.id} defaultValue={group.id}>
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
                            <DialogDisclosure
                              {...addNewSingleItemToAddonGroupPanel}
                              style={{ all: 'unset' }}
                            >
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
                                    bg: transparentize(
                                      0.5,
                                      colors.neutral[700]
                                    ),
                                  },
                                }}
                              />
                            </DialogDisclosure>
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

                          <DialogDisclosure
                            {...removeAddonGroupDialog}
                            style={{ all: 'unset' }}
                          >
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
                                    bg: transparentize(
                                      0.5,
                                      colors.neutral[700]
                                    ),
                                  },
                                }}
                              />
                            </Tooltip>
                          </DialogDisclosure>
                        </Flex>
                      </Flex>

                      {group.products && group.products.length >= 1 ? (
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
                          }}
                        >
                          <DialogDisclosure
                            {...addNewSingleItemToAddonGroupPanel}
                            style={{ all: 'unset' }}
                          >
                            <IconButton
                              icon="plus"
                              ariaLabel="Adicione produtos"
                            />
                          </DialogDisclosure>
                          <Text color="subdued">
                            Adicione produtos ao seu grupo.
                          </Text>
                        </Flex>
                      )}
                    </AccordionItem>
                  </Accordion>
                ))}
            </Flex>
          </Layout>
        </Box>
      </Page>

      <PanelAddProductAddOn dialog={addNewAddonPanel} />
      <DialogAddSingleItemToGroup
        dialog={addNewSingleItemToAddonGroupPanel}
        product_type="multi"
      />
      <Dialog
        dialog={removeAddonGroupDialog}
        title="Deseja remover esse grupo?"
        content="Ao confirmar, esse grupo será excluído permanentemente."
        onPrimaryLabel="Remover grupo"
        variant="delete"
        size="sm"
        css={{ h: '30vh' }}
      ></Dialog>
    </>
  );
}

export default ProductAddonsPage;
