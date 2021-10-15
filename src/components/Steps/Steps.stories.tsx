import { Story, Meta } from '@storybook/react/types-6-0';

import Steps from '.';

const steps = [
  {
    label: 'Basic info',
    to: '/',
  },
  {
    label: 'Contact info',
    to: '/',
    isActive: true,
  },
  {
    label: 'Some other info',
    to: '/',
  },
];

export default {
  title: 'Navigation/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
  },
  args: {
    steps: steps,
  },
} as Meta;

const Template: Story = (args) => <Steps steps={steps} {...args} />;

export const Primary = Template.bind({});
