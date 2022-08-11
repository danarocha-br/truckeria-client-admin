import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { UserProfile, UserProfileProps } from '.';

export default {
  title: 'Components/UserProfile',
  component: UserProfile,
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

const Template: Story<UserProfileProps> = (args) => <UserProfile {...args} />;

export const Default = Template.bind({});
