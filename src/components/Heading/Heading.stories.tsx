import { Story, Meta } from '@storybook/react/types-6-0';

import Heading from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = (args) => <Heading {...args}>I am a title </Heading>;

export const Default = Template.bind({});
