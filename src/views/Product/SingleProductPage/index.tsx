import React, { useEffect, useMemo } from 'react';
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
  ScrollArea,
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
    watch,
    setValue,
  } = useForm<IProduct>({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues },
    mode: 'onChange',
  });

  function onSubmit(values: IProduct) {
    console.log(values);
  }

  const costPrice = watch('cost_price');
  const marginPrice = watch('margin_price');

  const getPriceValue = useMemo(() => {
    return (costPrice / 100) * marginPrice;
  }, [costPrice, marginPrice]);

  useEffect(() => {
    setValue('price', getPriceValue);
  }, [costPrice, marginPrice, getPriceValue, setValue]);

  return (
    <AdminLayout
      removePadding
      bgColor={transparentize(0.7, colors.neutral[200])}
    >
      <Flex css={{ h: '$full' }}>
        <Box
          css={{
            flex: 2,
            borderRadius: '$md',
          }}
        >
          <ScrollArea>
            <Flex
              align="center"
              css={{
                bg: transparentize(0.6, colors.neutral[300]),
                h: '$9',
                px: '$8',
                borderTopLeftRadius: '$lg',
                w: 'calc(100% + 24px)',

                '@light': {
                  bg: '$neutral700',
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

            <Box css={{ p: '$7', h: 'calc(100vh - 2rem)' }}>
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
                  />

                  <Flex>
                    <TextInput
                      name="internal_name"
                      id="internal_name"
                      label="Nome interno (reduzido)"
                      control={control}
                    />
                    <Select
                      name="product_type"
                      id="product_type"
                      label="Tipo de produto"
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
                  />

                  <Select
                    name="product_unity"
                    id="product_unity"
                    label="Unidade"
                    options={PRODUCT_UNITY_TYPES}
                    control={control}
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
                  />
                  <NumberInput
                    name="margin_price"
                    label="Margem bruta (%)"
                    suffix=" %"
                    control={control}
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
                  />

                  <Text size="sm" color="lighter">
                    Quantidade de venda
                  </Text>
                  <Flex>
                    <NumberInput
                      name="default_quantity"
                      label="Quantidade inicial"
                      control={control}
                    />
                    <NumberInput
                      name="max_quantity"
                      label="Quantidade máxima"
                      control={control}
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
                  />

                  <SelectAsyncCreatable
                    name="tags"
                    label="Tags"
                    control={control}
                    isMulti
                    defaultOptions={[]}
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
          </ScrollArea>
        </Box>

        <Flex
          css={{
            flex: 1,
            h: 'calc(100vh - 2rem)',
            bg: '$white',
            borderTopLeftRadius: '$lg',
            borderBottomLeftRadius: '$lg',
          }}
        >
          hey
        </Flex>
      </Flex>
    </AdminLayout>
  );
}

export default SingleProductPage;
