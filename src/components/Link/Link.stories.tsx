import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Link, LinkProps } from '.';

export default {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    as: '',
    label: "I don't have an account",
    href: '/',
    variant: 'standalone',
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Standalone = Template.bind({});
export const Inline = Template.bind({});
Inline.args = {
  variant: 'inline',
  label: 'Read our terms and conditions',
};
