import { Story, Meta } from '@storybook/react/types-6-0';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { AnyObjectSchema } from 'yup';

import Select from '.';
import { FOOD_TYPE_OPTIONS } from 'constants/index';
import { useCallback } from 'react';

export default {
  title: 'Form Controls/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'type',
    name: 'type',
    label: 'Select a food type',
    options: FOOD_TYPE_OPTIONS,
    loading: false,
    disabled: false,
    isMulti: false,
    isClearable: false,
  },
  argTypes: {
    id: {
      table: {
        category: 'Text',
      },
    },
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
    options: {
      table: {
        category: 'Text',
      },
    },
    isMulti: {
      table: {
        category: 'Modifiers',
      },
    },
    isClearable: {
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  type FormData = {
    description: string;
  };

  const initialValues: FormData = {
    description: '',
  };

  const SampleSchema = Yup.object().shape({
    description: Yup.string().min(5).required('Description is required'),
  });

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(SampleSchema),
  });

  const {
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (values: FormData) => {
    console.log(values);
  }, []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
        <Select
          {...args}
          name="type"
          id="type"
          label="Select a food type"
          options={FOOD_TYPE_OPTIONS}
        />
      </form>
    </FormProvider>
  );
};

export const Single = Template.bind({});

export const isMulti = Template.bind({});
isMulti.args = {
  isMulti: true,
};
