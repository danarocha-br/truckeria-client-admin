import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['primary'],
      },
    },
  },
  args: {
    variant: 'primary',
    isExternal: false,
  },
} as Meta;

const Template: Story = (args) => (
  <NextLink href="/" passHref>
    <Link {...args}>I am a Link</Link>
  </NextLink>
);

export const Primary = Template.bind({});
