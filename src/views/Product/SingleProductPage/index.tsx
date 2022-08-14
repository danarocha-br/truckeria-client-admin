import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { transparentize } from 'polished';

import {
  AdminLayout,
  Box,
  Button,
  Flex,
  FormControl,
  NumberInput,
  Select,
  Text,
  TextInput,
  SelectAsyncCreatable,
} from 'components';
import SectionBlock from './SectionBlock';

import { data as product } from './mock';
import { schema } from './form.utils';
import { PRODUCT_UNITY_TYPES } from 'constants/index';
import { colors } from 'styles/tokens';

interface IProduct {
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
  barcode?: number | string;
  internal_barcode?: number | string;
  item_stock_quantity?: number | '';
  badges?: string[];
  isActive?: boolean;
  direct_sale: boolean;
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
  };

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    control,
    // watch,
    // setValue,
  } = useForm<IProduct>({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues },
    mode: 'onChange',
  });

  function onSubmit(values: IProduct) {
    console.log(values);
  }

  // const costPrice = watch('cost_price');
  // const marginPrice = watch('margin_price');

  // const getPriceValue = useMemo(() => {
  //   return (costPrice / 100) * marginPrice;
  // }, [costPrice, marginPrice]);

  // useEffect(() => {
  //   setValue('price', getPriceValue);
  // }, [costPrice, marginPrice, getPriceValue, setValue]);

  return (
    <AdminLayout
      removePadding
      bgColor={transparentize(0.7, colors.neutral[200])}
    >
      <Flex
        css={{
          h: '$full',
          flexDirection: 'column',

          '@bp-md': {
            flexDirection: 'row',
          },
        }}
      >
        <Box
          css={{
            '@bp-md': {
              flex: 2,
              borderRadius: '$md',
            },
          }}
        >
          {/** Nav */}
          <Flex
            align="center"
            css={{
              bg: transparentize(0.6, colors.neutral[300]),
              h: '$9',
              px: '$4',
              w: '$full',

              '@bp-md': {
                px: '$8',
                borderTopLeftRadius: '$lg',
              },

              '@dark': {
                bg: transparentize(0.4, colors.neutral[800]),
              },
            }}
          >
            <Button
              variant="icon"
              icon="chevronLeft"
              label="voltar"
              size="sm"
              css={{ ml: '$-5' }}
            />
            Detalhes
          </Flex>

          <Box
            css={{
              h: '$full',
              '@bp-md': {
                mr: '$4',
                p: '$7',
              },
            }}
          >
            {/** Toolbar */}
            <Flex
              justify="between"
              align="center"
              css={{ mt: '$-3', mb: '$4' }}
            >
              <Text size="sm">Produtos | Nome do produto</Text>

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
                description="Upload a photo from your computer or select an image from
              our free image library. Give your item an internal name. (It
              will only show up in your admin area) Enter a description to
              give your customers extra details about your item. Set
              separate prices for delivery and pickup options."
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
                    icon="file"
                    control={control}
                  />
                  <Select
                    name="product_type"
                    id="product_type"
                    label="Tipo de produto"
                    icon="type"
                    options={[
                      { label: 'Simples', value: 'single' },
                      { label: 'Combo', value: 'combo' },
                    ]}
                    control={control}
                  />
                </Flex>

                <TextInput
                  name="description"
                  id="description"
                  label="Informações adicionais"
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
                />
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

                <Text size="sm" color="lighter">
                  Quantidade de venda
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
                />
                <NumberInput
                  name="item_stock_quantity"
                  label="Quantidade em estoque (opcional)"
                  control={control}
                  icon="document"
                />

                <SelectAsyncCreatable
                  name="tags"
                  label="Tags"
                  control={control}
                  isMulti
                  defaultOptions={[]}
                  icon="tags"
                />
                {/* <SelectAsyncCreatable
                    name="badges"
                    label="Símbolos"
                    control={control}
                    isMulti
                  /> */}
              </SectionBlock>

              <SectionBlock
                title="Display Options"
                icon="eye"
                description="Change display of your item.
"
              >
                hey
              </SectionBlock>
            </FormControl>
          </Box>
        </Box>

        <Flex
          css={{
            d: 'none',

            '@bp-md': {
              d: 'flex',
              flex: 1,
              h: 'calc(100vh - 2rem)',
              bg: '$white',
              borderTopLeftRadius: '$lg',
              borderBottomLeftRadius: '$lg',
              px: '$6',
              ml: -23,
              zIndex: 2,
              position: 'sticky',
              top: 0,
            },
          }}
        >
          hey
        </Flex>
      </Flex>
    </AdminLayout>
  );
}

export default SingleProductPage;
