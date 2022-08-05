import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormError, FormErrorProps } from '.';
import { Box } from '../Box';

export default {
  title: 'Form/FormError',
  component: FormError,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    message: 'I am an error message.',
  },
} as Meta;

const Template: Story<FormErrorProps> = (args) => (
  <Box css={{ w: 200 }}>
    <FormError {...args} />
  </Box>
);

export const Default = Template.bind({});
