import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormWizard, FormWizardProps } from '.';

export default {
  title: 'Components/FormWizard',
  component: FormWizard,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
} as Meta;

const Template: Story<FormWizardProps> = (args) => <FormWizard {...args} />;

export const Default = Template.bind({});
