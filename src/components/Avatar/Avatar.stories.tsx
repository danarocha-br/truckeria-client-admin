import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    user: 'Collin Fernandes',
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
export const WithImage = Template.bind({});
WithImage.args = {
  imageURL:
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
};
