import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Dropdown, DropdownProps } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
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

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
