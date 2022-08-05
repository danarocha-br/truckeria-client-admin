import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
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

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
export const Symbol = Template.bind({});
Symbol.args = {
  variant: 'symbol',
};
