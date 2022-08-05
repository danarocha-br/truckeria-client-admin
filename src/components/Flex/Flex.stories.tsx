import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Flex, FlexProps } from '.';

export default {
  title: 'Primitives/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  args: {
    as: 'div',
    align: 'stretch',
    justify: 'center',
    wrap: 'noWrap',
    gap: 4,
    direction: 'row',
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
    align: {
      table: {
        category: 'Modifiers',
      },
      options: ['stretch', 'center', 'end', 'start', 'baseline'],
      control: {
        type: 'inline-radio',
      },
    },
    justify: {
      table: {
        category: 'Modifiers',
      },
      options: ['start', 'center', 'end', 'between'],
      control: {
        type: 'inline-radio',
      },
    },
    direction: {
      table: {
        category: 'Modifiers',
      },
      options: ['column', 'row', 'rowReverse', 'columnReverse'],
      control: {
        type: 'inline-radio',
      },
    },
    gap: {
      table: {
        category: 'Modifiers',
      },
    },
    wrap: {
      type: '',
      table: {
        category: 'Modifiers',
      },
      options: ['wrap', 'noWrap', 'wrapReverse'],
      control: {
        type: 'inline-radio',
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
    ref: {
      type: '',
      table: {
        category: 'Text',
      },
    },
  },
} as FlexProps as Meta;

const Template: Story<FlexProps> = (args) => (
  <Flex
    {...args}
    css={{
      h: '100%',
      w: '20rem',
    }}
  >
    <Flex
      align="center"
      justify="center"
      css={{ bg: '$surface-base-hover', w: '$10', h: '$10' }}
    >
      1
    </Flex>
    <Flex
      align="center"
      justify="center"
      css={{ bg: '$surface-base-hover', w: '$10', h: '$10' }}
    >
      2
    </Flex>
  </Flex>
);

export const Primary = Template.bind({});
