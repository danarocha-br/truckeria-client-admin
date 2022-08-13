import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge, BadgeProps } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
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

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
