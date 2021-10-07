import { Story, Meta } from '@storybook/react/types-6-0';

import AuthLayout from '.';

export default {
  title: 'Templates/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    to: '/sign-up',
    linkLabel: "I don't have an account",
    title: 'Welcome back!',
    position: 'left',
  },
} as Meta;

const Template: Story = (args) => (
  <AuthLayout
    to="/sign-up"
    linkLabel="I don't have an account"
    title="Welcome back!"
    {...args}
  >
    <form action=""></form>
  </AuthLayout>
);

export const Default = Template.bind({});

export const PositionRight = Template.bind({});
PositionRight.args = {
  position: 'right',
  to: '/sign-in',
  linkLabel: 'I already have an account',
  title: 'Welcome!',
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12',
  },
};
