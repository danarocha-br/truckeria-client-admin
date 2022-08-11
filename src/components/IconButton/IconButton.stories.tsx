import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconButton, IconButtonProps } from '.';
import { Flex } from 'components/Flex';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    icon: 'plus',
    ariaLabel: 'Add',
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <Flex gap="8">
    <IconButton {...args} />
    <IconButton {...args} variant="success" />
  </Flex>
);

export const Default = Template.bind({});
