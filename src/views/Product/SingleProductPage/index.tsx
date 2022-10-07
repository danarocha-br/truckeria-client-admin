import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { transparentize } from 'polished';
import Link from 'next/link';

import {
  Page,
  Layout,
  Box,
  Button,
  Flex,
  FormControl,
  NumberInput,
  Select,
  Text,
  TextInput,
  SelectAsyncCreatable,
  Icon,
  Toggle,
  Tooltip,
  InfoButton,
  Tabs,
  TabList,
  TabTitle,
  TabContent,
  Breadcrumb,
  BreadcrumbItem,
  Switch,
  Textarea,
} from 'components';
import SectionBlock from './SectionBlock';
import ProductCardBlock from './ProductCardBlock';
import ComboForm from './ComboForm';

import { data as product } from './mock';
import { schema } from './form.utils';
import { PRODUCT_UNITY_TYPES } from 'constants/index';
import { colors } from 'styles/tokens';

export interface IProduct {
  id?: string;
  menu_category_id?: string[];
  name: string;
  internal_name?: string;
  image_url?: string;
  description?: string;
  product_unity?: string;
  price?: number;
  cost_price: number;
  margin_price: number;
  default_quantity: number;
  max_quantity?: number | '';
  product_type: string;
  product_category?: string[];
  tags?: string[];
  calories?: number;
  product_weight?: number;
  barcode?: number | string;
  internal_barcode?: number | string;
  item_stock_quantity?: number | '';
  badges?: string[];
  is_active?: boolean;
  direct_sale?: boolean;
  display_featured: boolean;
  display_new_item: boolean;
  // additional_items?: {
  //   group_name: string;
  //   type: 'mandatory' | 'optional';
  //   min_quantity: number;
  //   max_quantity: number;
  //   isActive: boolean;
  //   products: {
  //     id: string;
  //     product_id: string;
  //     product_name: string;
  //     product_price: number;
  //     isActive: boolean;
  //   }[];
  // };
}

function SingleProductPage() {
  const [isPanelActive, setPanelActive] = useState(true);

  const defaultValues: IProduct = {
    image_url: product.image_url || '',
    name: product.name || '',
    internal_name: product.internal_name || '',
    description: product.description || '',
    product_type: product.product_type || '',
    product_unity: product.product_unity || '',
    cost_price: product.cost_price || 0,
    margin_price: product.margin_price || 0,
    price: 0,
    default_quantity: product.default_quantity || 1,
    max_quantity: product.max_quantity || '',
    tags: product.tags || [],
    badges: product.tags || [],
    barcode: product.barcode || '',
    internal_barcode: product.internal_barcode || '',
    item_stock_quantity: product.item_stock_quantity || '',
    direct_sale: product.direct_sale || false,
    display_featured: product.display_featured || false,
    display_new_item: product.display_featured || false,
    is_active: product.is_active || true,
  };

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    control,
    watch,
    // setValue,
  } = useForm<IProduct>({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues },
    mode: 'onChange',
  });

  function onSubmit(values: IProduct) {
    console.log(values);
  }

  const productType = watch('product_type');

  // const costPrice = watch('cost_price');
  // const marginPrice = watch('margin_price');

  // const getPriceValue = useMemo(() => {
  //   return (costPrice / 100) * marginPrice;
  // }, [costPrice, marginPrice]);

  // useEffect(() => {
  //   setValue('price', getPriceValue);
  // }, [costPrice, marginPrice, getPriceValue, setValue]);

  //TODO animation on panel toggle

  return (
    <Page removePadding bgColor={transparentize(0.1, colors.neutral[800])}>
      <Layout sidePanel={isPanelActive && <ProductCardBlock data={product} />}>
        <Box
          css={{
            '@media (prefers-reduced-motion: no-preference)': {
              transition: '$base',
              animationDuration: '400ms',
              animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'width',
            },

            '@bp-lg': {
              w: isPanelActive ? '66%' : '100%',
            },
          }}
        >
          <Box
            css={{
              w: '$full',

              '@bp-md': {
                flex: 2,
                borderRadius: '$md',
              },
            }}
          >
            <Toggle
              ariaLabel="Fechar/abrir painel"
              defaultPressed={true}
              pressed={isPanelActive}
              onPressedChange={() => setPanelActive(!isPanelActive)}
              css={{
                d: 'none',
                position: 'absolute',
                top: '$2',
                right: '$4',
                zIndex: 3,

                w: '$7',
                h: '$7',
                p: 6,
                borderRadius: '$round',
                '@bp-lg': {
                  d: 'block',
                },

                [`.dark-theme &`]: {
                  bg: '$neutral800',
                },

                [`.light-theme &`]: {
                  bg: '$white',
                },
              }}
            >
              <Tooltip
                content={isPanelActive ? 'Fechar painel' : 'Abrir painel'}
                side="left"
              >
                <Icon
                  name={isPanelActive ? 'close' : 'panel'}
                  aria-label={isPanelActive ? 'fechar' : 'abrir'}
                  size="sm"
                />
              </Tooltip>
            </Toggle>
          </Box>

          <Tabs
            defaultValue="Detalhes básicos"
            css={{
              bg: '$surface-base-subdued',
              h: '$9',

              '@bp-md': {
                px: '$7',
                borderTopLeftRadius: '$lg',
              },

              [`.dark-theme &`]: {
                bg: transparentize(0.3, colors.neutral[500]),
              },
            }}
          >
            <TabList ariaLabel="Navegação de edição do produto">
              <Button
                variant="icon"
                icon="chevronLeft"
                label="voltar"
                size="sm"
                css={{
                  h: '$8',
                  px: 4,
                  mr: 8,
                  mt: 4,
                  bg: 'transparent !important',

                  '@bp-md': {
                    ml: '$-5',
                  },
                }}
              />
              <TabTitle title="Detalhes básicos" />
              <TabTitle
                title={productType === 'single' ? 'Complementos' : 'Combo'}
              />
              <TabTitle title="Menus" />
            </TabList>

            <TabContent title="Detalhes básicos">
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
                    <BreadcrumbItem
                      as={Link}
                      href="/products"
                      label="Produtos"
                    />
                    <BreadcrumbItem
                      as={Link}
                      href={`/products/${product.id}`}
                      label={product.name}
                      isActive
                    />
                  </Breadcrumb>

                  <Button
                    size="sm"
                    label="Salvar"
                    variant="success"
                    disabled={!isValid}
                    loading={isSubmitting}
                  />
                </Flex>

                <FormControl onSubmit={handleSubmit(onSubmit)}>
                  <SectionBlock
                    title="Detalhes"
                    icon="document"
                    description="Informações básicas do seu produto. Dê ao seu produto um nome interno (ele aparecerá na sua área admin)."
                  >
                    <TextInput
                      name="name"
                      id="name"
                      label="Nome do produto"
                      control={control}
                      icon="products"
                    />

                    <Flex>
                      <TextInput
                        name="internal_name"
                        id="internal_name"
                        label="Nome interno (reduzido)"
                        // icon="file"
                        control={control}
                        tooltip="Para seu controle interno"
                      />
                      <Select
                        name="product_type"
                        id="product_type"
                        label="Tipo de produto"
                        // icon="type"
                        options={[
                          { label: 'Simples', value: 'single' },
                          { label: 'Combo', value: 'combo' },
                        ]}
                        control={control}
                      />
                    </Flex>

                    <Textarea
                      name="description"
                      id="description"
                      label="Descrição"
                      control={control}
                      icon="fileAdd"
                    />

                    <Select
                      name="product_unity"
                      id="product_unity"
                      label="Unidade"
                      options={PRODUCT_UNITY_TYPES}
                      control={control}
                      icon="box"
                    />
                  </SectionBlock>

                  <SectionBlock
                    title="Preço"
                    icon="currency"
                    description="Informações de preço."
                  >
                    {product.product_type === 'single' && (
                      <>
                        <NumberInput
                          name="cost_price"
                          label="Preço de custo"
                          prefix={'R$ '}
                          decimalScale={2}
                          thousandSeparator="."
                          decimalSeparator=","
                          allowLeadingZeros
                          control={control}
                          icon="currency"
                        />
                        <NumberInput
                          name="margin_price"
                          label="Margem bruta (%)"
                          suffix=" %"
                          control={control}
                          icon="discount"
                          tooltip="O preço de venda é calculado com base na margem bruta."
                        />
                      </>
                    )}

                    {product.product_type === 'combo' && (
                      <Text color="subdued" size="sm">
                        O preço de um combo não pode ser editado, pois depende
                        do preço informado nos produtos incluídos no combo.
                      </Text>
                    )}

                    <NumberInput
                      name="price"
                      label="Preço de venda"
                      prefix={'R$ '}
                      thousandSeparator="."
                      decimalSeparator=","
                      allowLeadingZeros
                      control={control}
                      readOnly
                      icon="currency"
                    />

                    <Text
                      size="sm"
                      color="lighter"
                      css={{
                        d: 'inline-flex',
                        alignItems: 'center',
                        gap: '$1',
                      }}
                    >
                      Quantidade de venda
                      <InfoButton content="Use a quantidade máxima caso queira limitar a compra unitária por pedido." />
                    </Text>
                    <Flex>
                      <NumberInput
                        name="default_quantity"
                        label="Quantidade inicial"
                        control={control}
                        icon="pile"
                      />
                      <NumberInput
                        name="max_quantity"
                        label="Quantidade máxima"
                        control={control}
                        icon="pile"
                      />
                    </Flex>
                  </SectionBlock>

                  <SectionBlock
                    title="Outros"
                    icon="shop"
                    description="Enter tags for your item to increase visibility in search results. Enter barcode or stock number to keep track of your item. Add allergy icons to inform your customers."
                  >
                    <NumberInput
                      name="barcode"
                      label="Código de barras"
                      control={control}
                      icon="barcode"
                    />
                    <NumberInput
                      name="internal_barcode"
                      label="Código interno"
                      control={control}
                      icon="document"
                      tooltip="Utilize para facilitar sua busca."
                    />
                    <NumberInput
                      name="item_stock_quantity"
                      label="Quantidade em estoque (opcional)"
                      control={control}
                      icon="pile"
                    />

                    <SelectAsyncCreatable
                      name="tags"
                      label="Tags"
                      control={control}
                      isMulti
                      defaultOptions={[]}
                      icon="tags"
                      tooltip="Use tags para filtrar suas listas."
                    />
                    {/* <SelectAsyncCreatable
                    name="badges"
                    label="Símbolos"
                    control={control}
                    isMulti
                  /> */}
                  </SectionBlock>

                  <SectionBlock
                    title="Cardápio"
                    icon="book"
                    description="Configure a visualização deste produto.
"
                  >
                    <Flex direction="column" gap="8">
                      <Switch
                        name="display_featured"
                        label="Exibir como favorito"
                        control={control}
                        tooltip="Marque para que esse produto seja exibido como destaque no Menu e no POS."
                      />

                      <Switch
                        name="display_new_item"
                        label="Exibir como novo produto"
                        control={control}
                        tooltip="Marque para que esse produto seja exibido com o selo de 'Novo' no Menu e no POS."
                      />

                      <Switch
                        name="is_active"
                        label="Produto disponível"
                        control={control}
                        tooltip="Marque para que esse produto seja exibido em lista de buscas."
                      />
                    </Flex>
                  </SectionBlock>
                </FormControl>
              </Box>
            </TabContent>

            {productType === 'single' && (
              <TabContent title="Complementos">ho</TabContent>
            )}

            {productType === 'combo' && (
              <TabContent title="Combo">
                <ComboForm />
              </TabContent>
            )}

            <TabContent title="Menus">ho</TabContent>
          </Tabs>
        </Box>
      </Layout>
    </Page>
  );
}

export default SingleProductPage;
