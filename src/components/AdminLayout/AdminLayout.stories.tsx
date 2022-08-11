import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { AdminLayout, AdminLayoutProps } from '.';

export default {
  title: 'Components/AdminLayout',
  component: AdminLayout,
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

const Template: Story<AdminLayoutProps> = (args) => <AdminLayout {...args} />;

export const Default = Template.bind({});
