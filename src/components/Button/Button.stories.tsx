import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '.';
import { Grid } from '../Grid';
import { Flex } from '../Flex';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'I am a button',
    ariaLabel: 'I am a button',
    size: 'md',
    variant: 'primary',
    fullWidth: false,
    loading: false,
    disabled: false,
    onClick: () => console.log('clicked'),
  },
  argTypes: {
    label: {
      table: {
        category: 'Modifiers',
      },
    },
    ariaLabel: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'success', 'flat', 'icon'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
      },
    },
    onClick: {
      table: {
        category: 'Functions',
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
} as ButtonProps as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Grid align="center" justify="center" cols={3} gap={6} css={{ p: '$6' }}>
    <Button {...args} />
    <Button {...args} disabled />
    <Button {...args} loading />

    <Button {...args} variant="success" />
    <Button {...args} variant="success" disabled />
    <Button {...args} variant="success" loading />

    <Button {...args} variant="flat" />
    <Button {...args} variant="flat" disabled />
    <Button {...args} variant="flat" loading />
  </Grid>
);

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'pencil',
};

export const IconOnly: Story<ButtonProps> = (args) => (
  <Flex align="center" justify="center" gap={6} css={{ p: '$6' }}>
    <Button {...args} variant="icon" icon="pencil" />
    <Button {...args} variant="icon" icon="pencil" disabled />
    <Button {...args} variant="icon" icon="pencil" loading />
  </Flex>
);
