import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Text, NumberInput, TextInput, Select } from 'components';

export type StepProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  methods: UseFormReturn<any, object> | undefined;
};

const StepMainAddress = ({ methods }: StepProps) => {
  return (
    <>
      <Text
        as="h1"
        color="subdued"
        align="center"
        css={{ my: '$6', w: '$full' }}
      >
        Endereço de registro do seu food-truck:
      </Text>

      <NumberInput
        name="main_zipcode"
        label="CEP"
        icon="pin"
        format="#####-###"
        control={methods?.control}
      />
      <TextInput
        name="main_address_street"
        label="Rua"
        icon="location"
        control={methods?.control}
      />
      <TextInput
        name="main_address_number"
        label="Número"
        icon="location"
        control={methods?.control}
      />
      <Select
        name="main_address_state"
        label="Estado"
        icon="location"
        control={methods?.control}
        options={[]}
      />
    </>
  );
};

export default StepMainAddress;
