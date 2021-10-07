import { Story, Meta } from '@storybook/react/types-6-0';

import Skeleton from '.';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: 100,
    height: 10,
  },
} as Meta;

const Template: Story = (args) => (
  <div>
    <Skeleton {...args} />
    <Skeleton {...args} width={80} />
  </div>
);

export const Default = Template.bind({});
