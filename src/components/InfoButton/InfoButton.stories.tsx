import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InfoButton, InfoButtonProps } from '.';

export default {
  title: 'Components/InfoButton',
  component: InfoButton,
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

const Template: Story<InfoButtonProps> = (args) => <InfoButton {...args} />;

export const Default = Template.bind({});
