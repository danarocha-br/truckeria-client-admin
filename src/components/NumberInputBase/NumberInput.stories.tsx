import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { NumberInput, NumberInputProps } from '.';
import { Flex } from '../Flex';

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'zipcode',
    label: 'Zipcode',
    icon: 'pin',
    defaultValue: '',
    placeholder: '',
    loading: false,
    disabled: false,
    readOnly: false,
    errors: {},
  },
} as Meta;

const Template: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Flex direction="column" gap={6} css={{ w: 400 }}>
      <NumberInput
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        format="#####-###"
      />
    </Flex>
  );
};

export const Default = Template.bind({});

export const HasTooltip = Template.bind({});
HasTooltip.args = {
  tooltip: 'I am a tooltip',
};
