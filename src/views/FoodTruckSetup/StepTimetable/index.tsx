import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Text, NumberInput } from 'components';

export type StepProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  methods: UseFormReturn<any, object> | undefined;
};

const StepTimetable = ({ methods }: StepProps) => {
  return (
    <>
      <Text
        as="h1"
        color="subdued"
        align="center"
        css={{ my: '$6', w: '$full' }}
      >
        Horários de funcionamento:
      </Text>

      <NumberInput
        name="main_zipcode"
        label="CEP"
        icon="pin"
        format="#####-###"
        control={methods?.control}
      />
    </>
  );
};

export default StepTimetable;
