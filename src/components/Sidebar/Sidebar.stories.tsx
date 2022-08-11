import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar } from '.';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
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

const Template: Story = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
