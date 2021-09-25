import { Button, IconButton } from '@chakra-ui/react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FiEdit2 } from 'react-icons/fi';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md'],
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['primary', 'transparent'],
      },
    },
  },
  args: {
    size: 'md',
    isActive: false,
    isDisabled: false,
    isFullWidth: false,
    isLoading: false,
    variant: 'primary',
  },
} as Meta;

const Template: Story = (args) => <Button {...args}>I am a Label</Button>;

export const Primary = Template.bind({});

export const IconButtonDefault: Story = (args) => (
  <IconButton
    {...args}
    aria-label="action-name"
    variant="transparent"
    icon={<FiEdit2 />}
  ></IconButton>
);
