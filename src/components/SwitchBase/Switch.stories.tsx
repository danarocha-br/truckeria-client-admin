import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SwitchBase, SwitchProps } from '.';
import { Flex } from '../Flex';

export default {
  title: 'Form/Switch',
  component: SwitchBase,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'is_active',
    label: 'This product is active',
    defaultValue: true,
    disabled: false,
    errors: {},
  },
} as Meta;

const Template: Story<SwitchProps> = (args) => {
  const [inputValue, setInputValue] = useState(true);

  const handleChange = () => {
    return setInputValue(!inputValue);
  };

  return (
    <Flex direction="column" gap="8" css={{ w: 400 }}>
      <SwitchBase
        {...args}
        checked={inputValue}
        onCheckedChange={handleChange}
      />
      <SwitchBase
        {...args}
        checked={inputValue}
        onCheckedChange={handleChange}
        disabled
      />
    </Flex>
  );
};

export const Default = Template.bind({});
export const HasTooltip = Template.bind({});
HasTooltip.args = {
  tooltip: 'I am a tooltip',
};
export const HasError = Template.bind({});
HasError.args = {
  errors: {
    message: 'I am an error message.',
  },
};
