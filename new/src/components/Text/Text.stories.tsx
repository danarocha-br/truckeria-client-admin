import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps } from '.';
import { Grid } from '../Grid';

export default ({
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    as: 'span',
    size: 'base',
    color: 'primary',
    weigth: 'regular',
    align: 'left',
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
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['tiny', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: [
        'primary',
        'subdued',
        'lighter',
        'success',
        'danger',
        'warning',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    weigth: {
      table: {
        category: 'Modifiers',
      },
      options: ['light', 'regular', 'medium', 'semibold'],
      control: {
        type: 'inline-radio',
      },
    },
    leading: {
      table: {
        category: 'Modifiers',
      },
      options: [1, 2, 3, 4, 5, 6, 7],
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
} as TextProps) as Meta;

const Template: Story<TextProps> = args => (
  <Grid
    cols={7}
    align="center"
    justify="center"
    gap={7}
    css={{ w: '$full', p: '$4' }}
  >
    <Text {...args} size="tiny">
      I am a text.
    </Text>
    <Text {...args} size="tiny" color="subdued">
      I am a text.
    </Text>
    <Text {...args} size="tiny" color="lighter">
      I am a text.
    </Text>
    <Text {...args} size="tiny" color="success">
      I am a text.
    </Text>
    <Text {...args} size="tiny" color="warning">
      I am a text.
    </Text>
    <Text {...args} size="tiny" color="danger">
      I am a text.
    </Text>
    <Text {...args} size="tiny" color="onInteractive">
      I am a text.
    </Text>

    <Text {...args} size="sm">
      I am a text.
    </Text>
    <Text {...args} size="sm" color="subdued">
      I am a text.
    </Text>
    <Text {...args} size="sm" color="lighter">
      I am a text.
    </Text>
    <Text {...args} size="sm" color="success">
      I am a text.
    </Text>
    <Text {...args} size="sm" color="warning">
      I am a text.
    </Text>
    <Text {...args} size="sm" color="danger">
      I am a text.
    </Text>
    <Text {...args} size="sm" color="onInteractive">
      I am a text.
    </Text>

    <Text {...args}>I am a text.</Text>
    <Text {...args} color="subdued">
      I am a text.
    </Text>
    <Text {...args} color="lighter">
      I am a text.
    </Text>
    <Text {...args} color="success">
      I am a text.
    </Text>
    <Text {...args} color="warning">
      I am a text.
    </Text>
    <Text {...args} color="danger">
      I am a text.
    </Text>
    <Text {...args} color="onInteractive">
      I am a text.
    </Text>

    <Text {...args} size="lg">
      I am a text.
    </Text>
    <Text {...args} size="lg" color="subdued">
      I am a text.
    </Text>
    <Text {...args} size="lg" color="lighter">
      I am a text.
    </Text>
    <Text {...args} size="lg" color="success">
      I am a text.
    </Text>
    <Text {...args} size="lg" color="warning">
      I am a text.
    </Text>
    <Text {...args} size="lg" color="danger">
      I am a text.
    </Text>
    <Text {...args} size="lg" color="onInteractive">
      I am a text.
    </Text>

    <Text {...args} size="xl">
      I am a text.
    </Text>
    <Text {...args} size="xl" color="subdued">
      I am a text.
    </Text>
    <Text {...args} size="xl" color="lighter">
      I am a text.
    </Text>
    <Text {...args} size="xl" color="success">
      I am a text.
    </Text>
    <Text {...args} size="xl" color="warning">
      I am a text.
    </Text>
    <Text {...args} size="xl" color="danger">
      I am a text.
    </Text>
    <Text {...args} size="xl" color="onInteractive">
      I am a text.
    </Text>

    <Text {...args} size="2xl">
      I am a text.
    </Text>
    <Text {...args} size="2xl" color="subdued">
      I am a text.
    </Text>
    <Text {...args} size="2xl" color="lighter">
      I am a text.
    </Text>
    <Text {...args} size="2xl" color="success">
      I am a text.
    </Text>
    <Text {...args} size="2xl" color="warning">
      I am a text.
    </Text>
    <Text {...args} size="2xl" color="danger">
      I am a text.
    </Text>
    <Text {...args} size="2xl" color="onInteractive">
      I am a text.
    </Text>

    <Text {...args} size="3xl">
      I am a text.
    </Text>
    <Text {...args} size="3xl" color="subdued">
      I am a text.
    </Text>
    <Text {...args} size="3xl" color="lighter">
      I am a text.
    </Text>
    <Text {...args} size="3xl" color="success">
      I am a text.
    </Text>
    <Text {...args} size="3xl" color="warning">
      I am a text.
    </Text>
    <Text {...args} size="3xl" color="danger">
      I am a text.
    </Text>
    <Text {...args} size="3xl" color="onInteractive">
      I am a text.
    </Text>
  </Grid>
);

export const Default = Template.bind({});
