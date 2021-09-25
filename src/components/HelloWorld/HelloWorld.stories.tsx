import { Story, Meta } from '@storybook/react/types-6-0';

import Heading from '.';

export default {
  title: 'Example/Heading',
  component: Heading,
} as Meta;

export const Default: Story = (args) => <Heading {...args} />;
