import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Text, NumberInput, TextInput } from 'components';

export type StepProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  methods: UseFormReturn<any, object> | undefined;
};

const StepUserAccount = ({ methods }: StepProps) => {
  return (
    <>
      <Text
        as="h1"
        color="subdued"
        align="center"
        css={{ my: '$6', w: '$full' }}
      >
        Nos conte um pouco mais sobre você:
      </Text>

      <TextInput
        name="first_name"
        label="Nome"
        icon="user"
        control={methods?.control}
        autoComplete="given-name"
      />
      <TextInput
        name="last_name"
        label="Sobrenome"
        icon="user"
        control={methods?.control}
        autoComplete="family-name"
      />
      <NumberInput
        name="cpf"
        label="Seu CPF"
        icon="identity"
        control={methods?.control}
        format="###.###.###-##"
      />
    </>
  );
};

export default StepUserAccount;
