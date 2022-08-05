import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Grid, GridProps } from '.';
import { Flex } from '../Flex';

export default {
  title: 'Primitives/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    as: 'div',
    flow: 'column',
    align: 'center',
    justify: 'center',
    cols: 3,
    rows: 1,
    gap: 4,
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
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
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
    flow: {
      table: {
        category: 'Modifiers',
      },
      options: ['column', 'row', 'row-dense', 'col-dense'],
      control: {
        type: 'inline-radio',
      },
    },
    cols: {
      table: {
        category: 'Modifiers',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'],
      control: {
        type: 'select',
      },
    },
    rows: {
      table: {
        category: 'Modifiers',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none'],
      control: {
        type: 'select',
      },
    },
    gap: {
      table: {
        category: 'Modifiers',
      },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      control: {
        type: 'select',
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
} as GridProps as Meta;

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Flex
      align="center"
      justify="center"
      css={{ bg: '$surface-base-hover', w: '$10', h: '$10' }}
    />
    <Flex
      align="center"
      justify="center"
      css={{ bg: '$surface-base-hover', w: '$10', h: '$10' }}
    />
    <Flex
      align="center"
      justify="center"
      css={{ bg: '$surface-base-hover', w: '$10', h: '$10' }}
    />
  </Grid>
);

export const Default = Template.bind({});
