import React, { useEffect } from 'react';
import { DialogStateReturn } from 'reakit';
import {
  FormControl,
  NumberInput,
  Dialog,
  Flex,
  Text,
  Select,
  Button,
  Box,
  Tooltip,
  TextInput,
} from 'components';
import { transparentize } from 'polished';
import { useFormWithSchemaBuilder } from 'hooks/useFormWithSchema';
import { ERROR_MESSAGES } from 'constants/index';
import { darkTheme } from '../../../../../stitches.config';
import { colors } from 'styles/tokens';
import { useFieldArray } from 'react-hook-form';

type AddProductAddonProps = {
  dialog: DialogStateReturn;
  product_type: 'multi' | 'single';
};

interface NewAddonMultiItem {
  product_id: string;
  product_price: number;
}

interface NewAddonSingleItem {
  title: string;
}

const DialogAddSingleItemToGroup = ({
  dialog,
  product_type,
}: AddProductAddonProps) => {
  const multiItemDefaultValues: NewAddonMultiItem = {
    product_id: '',
    product_price: 1,
  };
  const singleItemDefaultValues: NewAddonSingleItem = {
    title: '',
  };

  const {
    handleSubmit,
    // formState: { isSubmitting, isValid },
    control,
  } = useFormWithSchemaBuilder(
    (yup) =>
      yup.object({
        product_id: yup
          .string()
          .required(ERROR_MESSAGES.VALIDATION.EMAIL.REQUIRED),

        product_price: yup.number().required(),
      }),

    { defaultValues: { ...multiItemDefaultValues }, mode: 'onChange' }
  );

  const {
    fields: multiFields,
    append: multiAppend,
    remove: multiRemove,
  } = useFieldArray({
    control,
    //@ts-ignore
    name: 'products_multi',
  });

  const {
    fields: singleFields,
    append: singleAppend,
    remove: singleRemove,
  } = useFieldArray({
    control,
    //@ts-ignore
    name: 'products_single',
  });

  useEffect(() => {
    if (multiFields.length < 1) {
      multiAppend({ ...multiItemDefaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiFields, multiAppend]);

  useEffect(() => {
    if (singleFields.length < 1) {
      singleAppend({ ...singleItemDefaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleFields, singleAppend]);

  const onSubmit = (values: NewAddonMultiItem) => {
    return console.log(values);
  };

  return (
    <Dialog
      dialog={dialog}
      title="Adicione itens ao 'grupo'"
      onPrimaryLabel={
        multiFields.length > 1 ? 'Adicionar itens' : 'Adicionar item'
      }
      onPrimaryClick={() => 'clicked'}
      css={{ h: '50vh', pb: '5rem' }}
    >
      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        css={{
          borderRadius: '$xs',
          gap: '$3',
        }}
      >
        {product_type === 'multi' ? (
          <Flex
            direction="column"
            fullWidth
            css={{ borderBottom: '2px solid $surface-base-default', pb: '$4' }}
          >
            {multiFields.map((field, index) => (
              <Flex align="center" fullWidth key={field.id}>
                <Text size="xs" css={{ whiteSpace: 'nowrap', mr: '$3' }}>
                  {index + 1}.
                </Text>
                <Select
                  name={`products_multi.${index}.product_id`}
                  label="Produto"
                  placeholder="Selecione um produto"
                  control={control}
                  options={[{ label: 1, value: 1 }]}
                  icon="products"
                />

                <NumberInput
                  name={`products_multi.${index}.product_price`}
                  label="Preço no grupo"
                  control={control}
                  tooltip="Preço unitário a ser cobrado pelo produto quando vendido nesse grupo."
                  icon="currency"
                  prefix={'R$ '}
                  decimalScale={2}
                  thousandSeparator="."
                  decimalSeparator=","
                  allowLeadingZeros
                />
                <Button
                  icon="trash"
                  label="delete"
                  variant="icon"
                  size="sm"
                  disabled={multiFields.length <= 1 ? true : false}
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
                  onClick={() => multiRemove(index)}
                />
                {multiFields.length === index + 1 ? (
                  <Tooltip content="Adicione novo produto ao grupo">
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
                        '&:disabled': { opacity: 0 },
                        [`.${darkTheme} &`]: {
                          color: '$text-onInteractive',
                          bg: transparentize(0.5, colors.neutral[700]),
                        },
                      }}
                      onClick={() => multiAppend({ ...multiItemDefaultValues })}
                    />
                  </Tooltip>
                ) : (
                  <Box css={{ w: '$12' }} />
                )}
              </Flex>
            ))}
          </Flex>
        ) : (
          <Flex direction="column" fullWidth>
            {singleFields.map((field, index) => (
              <Flex align="center" fullWidth key={field.id}>
                <TextInput
                  name={`products_single.${index}.product_id`}
                  label="Nome da opção"
                  placeholder="Ex.: Ponto médio"
                  control={control}
                />
                <Button
                  icon="trash"
                  label="delete"
                  variant="icon"
                  size="sm"
                  disabled={singleFields.length <= 1 ? true : false}
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
                  onClick={() => singleRemove(index)}
                />
                {singleFields.length === index + 1 ? (
                  <Tooltip content="Adicione novo produto ao grupo">
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
                        '&:disabled': { opacity: 0 },
                        [`.${darkTheme} &`]: {
                          color: '$text-onInteractive',
                          bg: transparentize(0.5, colors.neutral[700]),
                        },
                      }}
                      onClick={() =>
                        singleAppend({ ...multiItemDefaultValues })
                      }
                    />
                  </Tooltip>
                ) : (
                  <Box css={{ w: '$8' }} />
                )}
              </Flex>
            ))}
          </Flex>
        )}

        {product_type === 'multi' && (
          <Flex justify="between">
            <Text color="subdued">Valor do grupo</Text>
            <Text weight="medium">R$ 30,00</Text>
          </Flex>
        )}
      </FormControl>
    </Dialog>
  );
};

export default DialogAddSingleItemToGroup;
