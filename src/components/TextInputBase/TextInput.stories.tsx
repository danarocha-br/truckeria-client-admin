import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput, TextInputProps } from '.';
import { Flex } from '../Flex';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'email',
    label: 'E-mail',
    icon: 'mail',
    autoComplete: 'email',
    inputMode: 'email',
    defaultValue: '',
    placeholder: '',
    loading: false,
    disabled: false,
    readOnly: false,
    errors: {},
  },
  argTypes: {
    name: {
      table: {
        category: 'Text',
      },
    },
    label: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      table: {
        category: 'Text',
      },
    },
    autoComplete: {
      table: {
        category: 'Modifiers',
      },
    },
    inputMode: {
      table: {
        category: 'Modifiers',
      },
    },
    hasValue: {
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    readOnly: {
      table: {
        category: 'State',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    errors: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(event.target.value);
  };

  return (
    <Flex direction="column" gap={6} css={{ w: 400 }}>
      <TextInput
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => handleChange(event)}
      />
      <TextInput
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => handleChange(event)}
        disabled
      />
      <TextInput
        {...args}
        hasValue={!!inputValue}
        value={inputValue}
        onChange={(event) => handleChange(event)}
        loading
      />
      <TextInput
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
  placeholder: 'Your-email',
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
