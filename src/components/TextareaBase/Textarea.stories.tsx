import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea, TextareaProps } from '.';
import { Flex } from '../Flex';

export default {
  title: 'Form/Textarea',
  component: Textarea,
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

const Template: Story<TextareaProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    return setInputValue(event.target.value);
  };

  return (
    <Flex direction="column" gap={6} css={{ w: 400 }}>
      <Textarea
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => handleChange(event)}
      />
      <Textarea
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => handleChange(event)}
        disabled
      />
      <Textarea
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => handleChange(event)}
        loading
      />
      <Textarea
        {...args}
        hasValue={true}
        value={'hello@truckeria.app'}
        readOnly
      />
    </Flex>
  );
};

export const Default = Template.bind({});

export const HasPlaceholder = Template.bind({});
HasPlaceholder.args = {
  placeholder: 'I am a placeholder',
};

export const HasError = Template.bind({});
HasError.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const HasTooltip = Template.bind({});
HasTooltip.args = {
  tooltip: 'I am a tooltip',
};
