import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    color: 'primary',
    size: 'xs',
    variant: 'component',
  },
  argTypes: {
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'onInteractive'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['component', 'page'],
      control: {
        type: 'inline-radio',
      },
    },
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
} as SpinnerProps as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Component = Template.bind({});
export const Page = Template.bind({});
Page.args = {
  variant: 'page',
};
