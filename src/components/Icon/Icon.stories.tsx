//@ts-noCheck
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps, iconPath } from '.';
import { Grid } from '../Grid';
import { Text } from '../Text';
import { Flex } from '../Flex';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    status: 'stable',
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'plus',
    color: 'subdued',
    size: 'base',
    label: 'Add',
  },
  argTypes: {
    name: {
      table: {
        category: 'Modifiers',
      },
    },
    label: {
      table: {
        category: 'Accessibility',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: [
        'lighter',
        'primary',
        'subdued',
        'danger',
        'success',
        'warning',
        'onInteractive',
        'current',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
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
  },
} as unknown as Meta;

const icons = Object.keys(iconPath);

const Template: Story<IconProps> = (args) => (
  <Grid
    flow="row-dense"
    cols="6"
    align="stretch"
    justify="between"
    css={{ w: '$full', p: '$4' }}
  >
    {icons.map((icon) => (
      <Flex
        key={icon}
        direction="column"
        align="center"
        gap="1"
        css={{
          bg: '$surface-base-subdued',
          mb: '$2',
          p: '$3',
          borderRadius: '$sm',
        }}
      >
        <Icon {...args} name={icon} />
        <Text as="p" size="sm" color="subdued">
          {icon}
        </Text>
      </Flex>
    ))}
  </Grid>
);

export const Default = Template.bind({});
