import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Callout, CalloutProps } from '.';
import { Text } from '../Text';
import { Link } from '../Link';

export default {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    icon: 'info',
    title: 'Good news, everyone!',
    variant: 'info',
  },
} as Meta;

const Template: Story<CalloutProps> = (args) => (
  <Callout {...args}>
    <Text>
      I have no news. Which is good!{' '}
      <Link href="/" label="And here is a link." variant="inline" />
    </Text>
  </Callout>
);

export const Info = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  icon: 'alert',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  icon: 'checkCircle',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  icon: 'alert',
};
