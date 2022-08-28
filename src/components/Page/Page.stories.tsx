import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Page, PageProps } from '.';

export default {
  title: 'Components/Page',
  component: Page,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    isAuthenticated: true,
  },
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const Default = Template.bind({});
