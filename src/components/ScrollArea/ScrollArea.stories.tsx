import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ScrollArea, CustomScrollAreaProps } from '.';
import { Box } from '../Box';
import { Text } from '../Text';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
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

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const Template: Story<CustomScrollAreaProps> = (args) => (
  <ScrollArea {...args}>
    <Box css={{ p: '15px 20px' }}>
      {TAGS.map((tag) => (
        <Text key={tag}>{tag}</Text>
      ))}
    </Box>
  </ScrollArea>
);

export const Default = Template.bind({});
