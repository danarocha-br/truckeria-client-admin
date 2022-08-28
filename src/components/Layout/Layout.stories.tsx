import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Layout, LayoutProps } from '.';

export default {
  title: 'Components/Layout',
  component: Layout,
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

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
