import React from 'react';
import { DialogStateReturn } from 'reakit';
import {
  FormControl,
  NumberInput,
  RadioGroup,
  SidePanel,
  TextInput,
  Flex,
} from 'components';
import { useFormWithSchemaBuilder } from 'hooks/useFormWithSchema';
import { ERROR_MESSAGES } from 'constants/index';

type AddProductAddonProps = {
  dialog: DialogStateReturn;
};

interface NewAddon {
  addon_name: string;
  addon_type: string;
  min_qty: number;
  max_qty: number;
}

const PanelAddProductAddOn = ({ dialog }: AddProductAddonProps) => {
  const defaultValues: NewAddon = {
    addon_name: '',
    addon_type: 'opcional',
    min_qty: 1,
    max_qty: 1,
  };

  const {
    handleSubmit,
    // formState: { isSubmitting, isValid },
    control,
    watch,
  } = useFormWithSchemaBuilder(
    (yup) =>
      yup.object({
        addon_name: yup
          .string()
          .required(ERROR_MESSAGES.VALIDATION.EMAIL.REQUIRED),
        addon_type: yup
          .string()
          .required(ERROR_MESSAGES.VALIDATION.EMAIL.REQUIRED),
        min_qty: yup.number().required(),
        max_qty: yup.number().required(),
      }),

    { defaultValues: { ...defaultValues }, mode: 'onChange' }
  );

  const onSubmit = (values: NewAddon) => {
    return console.log(values);
  };

  const addonType = watch('addon_type');

  return (
    <SidePanel
      dialog={dialog}
      title="Adicione um novo grupo"
      onPrimaryLabel="Adicionar grupo"
      onPrimaryClick={() => 'clicked'}
    >
      <FormControl
        onSubmit={handleSubmit(onSubmit)}
        css={{
          borderRadius: '$xs',
          gap: '$3',
        }}
      >
        <RadioGroup
          name="addon_type"
          legend="Tipo do grupo"
          defaultValue="optional"
          aria-label="Tipo do grupo"
          options={[
            { label: 'Opcional', value: 'opcional' },
            { label: 'Obrigatório', value: 'mandatory' },
          ]}
          tooltip="Determina se é obrigatório ou não selecionar pelo menos um produto nesse passo desse grupo."
          control={control}
          css={{ mb: '$4' }}
        />

        <TextInput name="addon_name" label="Nome do grupo" control={control} />

        <Flex align="center" fullWidth>
          {addonType === 'mandatory' && (
            <NumberInput
              name="min_qty"
              label="Quantidade mínima"
              control={control}
              tooltip="Quantidade mínima de produtos que devem ser selecionados nesse passo."
            />
          )}
          <NumberInput
            name="max_qty"
            label="Quantidade máxima"
            tooltip="Quantidade máxima de produtos que devem ser selecionados nesse passo."
            control={control}
          />
        </Flex>
      </FormControl>
    </SidePanel>
  );
};

export default PanelAddProductAddOn;
