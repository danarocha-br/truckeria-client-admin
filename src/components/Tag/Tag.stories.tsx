import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tag, TagProps } from '.';
import { Flex } from '../Flex';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'I am a tag',
    isEmpty: false,
    loading: false,
  },
} as Meta;

const Template: Story<TagProps> = (args) => (
  <Flex>
    <Tag {...args} isEmpty={false} />
    <Tag {...args} />
  </Flex>
);

export const Default = Template.bind({});
