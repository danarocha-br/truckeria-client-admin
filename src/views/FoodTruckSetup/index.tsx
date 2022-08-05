import React, { useRef } from 'react';

import { Flex, Box, FormWizard, FormWizardHandles, FormStep } from 'components';

import Previews from './Previews';
import StepUserAccount from './StepUserAccount';
import StepFoodTruck from './StepFoodTruck';
import StepMainAddress from './StepMainAddress';
import StepTimetable from './StepTimetable';

import {
  firstStepValidationSchema,
  fourthStepValidationSchema,
  secondStepValidationSchema,
  setupDefaultValues,
  SetupValues,
  thirdStepValidationSchema,
} from './form.utils';

const FoodTruckSetup = () => {
  const formRef = useRef<FormWizardHandles>(null);

  const steps = [
    {
      label: 'Sobre você',
    },
    {
      label: 'Cadastre seu foodtruck',
    },
    {
      label: 'Endereço',
    },
    {
      label: 'Horários',
    },
  ];

  const methods = formRef.current?.methods;

  const onSubmit = (values: SetupValues) => {
    console.log(values);
  };

  return (
    <Box
      css={{
        h: '$full',
        w: '$full',
        bg: '$background-subdued',
        '@bp-md': {
          p: '$6',
        },
        '@bp-lg': {
          px: '$11',
          py: '$8',
        },
      }}
    >
      <Flex
        justify="between"
        fullWidth
        gap={0}
        css={{
          h: '$full',
          '@bp-md': {
            borderRadius: '$md',
            overflow: 'hidden',
          },
        }}
      >
        <Flex
          direction="column"
          as="section"
          css={{
            flex: 1,
            h: '$full',
            w: '16rem',
            px: '$6',
            bg: '$background-default',

            '@bp-md': {
              px: '$10',
              pt: '$2',
            },
          }}
        >
          <FormWizard
            initialValues={setupDefaultValues}
            onSubmit={onSubmit}
            steps={steps}
          >
            <FormStep validationSchema={firstStepValidationSchema}>
              <StepUserAccount methods={methods} />
            </FormStep>

            <FormStep validationSchema={secondStepValidationSchema}>
              <StepFoodTruck methods={methods} />
            </FormStep>

            <FormStep validationSchema={thirdStepValidationSchema}>
              <StepMainAddress methods={methods} />
            </FormStep>

            <FormStep validationSchema={fourthStepValidationSchema}>
              <StepTimetable methods={methods} />
            </FormStep>
          </FormWizard>
        </Flex>

        <Previews />
      </Flex>
    </Box>
  );
};

export default FoodTruckSetup;
