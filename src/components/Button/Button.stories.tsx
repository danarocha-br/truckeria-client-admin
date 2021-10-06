import { Story } from '@storybook/react/types-6-0';
import { FiPlus } from 'react-icons/fi';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    label: 'Sign in',
    ariaLabel: 'View more',
    kind: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false,
    onClick: () => 'clicked',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    ariaLabel: {
      table: {
        category: 'Text',
      },
    },
    onClick: {
      table: {
        category: 'Events',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
    },
    kind: {
      table: {
        category: 'Modifiers',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
      },
    },
    icon: {
      type: '',
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      type: '',
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
      type: '',
      table: {
        category: 'Modifiers',
      },
    },
  },
};

const Template: Story = (args) => (
  <div className="flex flex-col items-center justify-center space-y-8 h-full w-full">
    <Button {...args} />

    <Button {...args} color="success" />
  </div>
);

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Add',
  icon: <FiPlus></FiPlus>,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  ariaLabel: 'Add',
  icon: <FiPlus></FiPlus>,
  variant: 'icon',
};
