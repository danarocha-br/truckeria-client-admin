import { Story, Meta } from '@storybook/react/types-6-0';

import Link from '.';

export default {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: "I don't have an account",
    to: '/',
  },
} as Meta;

const Template: Story = (args) => (
  <Link {...args} label="I don't have an account" to="/" />
);

export const Standalone = Template.bind({});
export const Inline = Template.bind({});
Inline.args = {
  variant: 'inline',
  label: 'Read our terms and conditions',
};
