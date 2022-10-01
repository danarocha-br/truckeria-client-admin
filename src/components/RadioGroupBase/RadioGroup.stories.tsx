import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioGroupBase, RadioGroupBaseProps } from '.';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroupBase,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
} as Meta;

const Template: Story<RadioGroupBaseProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(event.target.value);
  };

  return (
    <RadioGroupBase
      {...args}
      name="addon_type"
      legend="Tipo do grupo"
      defaultValue="optional"
      aria-label="Tipo do grupo"
      value={inputValue}
      onChange={handleChange}
      options={[
        { label: 'Opcional', value: 'opcional' },
        { label: 'Obrigatório', value: 'mandatory' },
      ]}
      tooltip="Determina se é obrigatório ou não selecionar pelo menos um produto nesse passo desse grupo."
    />
  );
};

export const Default = Template.bind({});
