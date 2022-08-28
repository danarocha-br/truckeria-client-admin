import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Text, NumberInput, TextInput } from 'components';

// import { FOOD_TYPES } from 'constants/index';

export type StepProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  methods: UseFormReturn<any, object> | undefined;
};

const StepFoodTruck = ({ methods }: StepProps) => {
  return (
    <>
      <Text
        as="h1"
        color="subdued"
        align="center"
        css={{ my: '$6', w: '$full' }}
      >
        Sobre o seu food-truck:
      </Text>
      {/* <TextInput name="foodtruck_avatar_url" label="Seu nome" icon="clock" /> */}
      <TextInput
        name="foodtruck_name"
        label="Nome do food-truck"
        icon="truck"
        control={methods?.control}
      />
      <NumberInput
        name="registered_code"
        label="CNPJ"
        icon="identity"
        placeholder="(Opcional)"
        control={methods?.control}
        format="##.###.###/####-##"
      />
      {/* <SelectAsyncCreatable
        name="cuisine_types"
        label="Categoria"
        icon="tag"
        control={methods?.control}
        isMulti
        placeholder="Selecione categoria(s)"
        defaultOptions={FOOD_TYPES}
      /> */}
    </>
  );
};

export default StepFoodTruck;
