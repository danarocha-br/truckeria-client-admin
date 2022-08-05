import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectAsyncCreatable, SelectAsyncCreatableProps } from '.';
import { useController, useForm } from 'react-hook-form';
import { Box } from '../Box';

export default {
  title: 'Form/SelectAsyncCreatable',
  component: SelectAsyncCreatable,
  parameters: {
    layout: 'centered',
    status: 'stable', // beta| deprecated | review | stable,
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'food',
    label: 'Select a food type',
    defaultValue: '',
    placeholder: '',
    loading: false,
    disabled: false,
    readOnly: false,
    isMulti: false,
    isClearable: true,
    defaultOptions: [
      {
        label: 'Barbecue',
        value: 'Barbecue',
      },
      {
        label: 'Burger',
        value: 'Burger',
      },
      {
        label: 'Mexican',
        value: 'Mexican',
      },
    ],
    errors: {},
  },
} as Meta;

const Template: Story<SelectAsyncCreatableProps> = (args) => {
  const { control } = useForm();

  const {
    field,
    formState: { errors },
  } = useController({ name: 'food', control, defaultValue: '' });

  return (
    <Box css={{ w: 500 }}>
      <SelectAsyncCreatable
        {...args}
        {...field}
        ref={field.ref}
        hasValue={!!field.value}
        errors={!!errors}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      />
    </Box>
  );
};

export const Default = Template.bind({});

export const isMulti = Template.bind({});
isMulti.args = {
  isMulti: true,
};
