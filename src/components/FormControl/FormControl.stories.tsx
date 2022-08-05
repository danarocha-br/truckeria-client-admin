import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormControl, FormControlProps } from '.';

export default {
  title: 'Form/FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    onSubmit: () => null,
  },
} as Meta;

const Template: Story<FormControlProps> = (args) => (
  <FormControl {...args}>children goes here</FormControl>
);

export const Default = Template.bind({});
