import { Story, Meta } from '@storybook/react/types-6-0';

import Logo from '.';

export default {
  title: 'Foundations/Logo',
  component: Logo,
} as Meta;

export const Desktop: Story = (args) => <Logo {...args} />;

export const Mobile = Desktop.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
