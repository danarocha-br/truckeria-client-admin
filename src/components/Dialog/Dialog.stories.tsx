import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Dialog, DialogProps } from '.';

export default {
  title: 'Components/Dialog',
  component: Dialog,
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

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
