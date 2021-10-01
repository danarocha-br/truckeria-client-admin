import { Story, Meta } from '@storybook/react/types-6-0';

import Logo from '.';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  args: {
    symbolOnly: false,
  },
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Default = Template.bind({});
export const SymbolOnly = Template.bind({});
SymbolOnly.args = {
  symbolOnly: true,
};
