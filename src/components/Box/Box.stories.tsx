import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box, BoxProps } from '.';

export default {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: { as: 'div' },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      type: '',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'object',
      },
    },
  },
} as BoxProps as Meta;

const Template: Story<BoxProps> = (args) => (
  <Box css={{ bg: '$surface-base-hover', w: '$17', h: '$17' }} {...args} />
);

export const Default = Template.bind({});
