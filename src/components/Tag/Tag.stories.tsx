import { Story, Meta } from '@storybook/react/types-6-0';

import Tag from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'I am a tag',
    loading: false,
    isEmpty: false,
  },
  argTypes: {
    label: {
      table: {
        category: 'Modifiers',
      },
    },
    isEmpty: {
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Tag label="I am a tag" {...args} />;

export const Primary = Template.bind({});
