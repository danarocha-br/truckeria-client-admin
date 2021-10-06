import { Story, Meta } from '@storybook/react/types-6-0';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { AnyObjectSchema } from 'yup';

import Textarea from '.';
import { useCallback } from 'react';

export default {
  title: 'Form Controls/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'email',
    label: 'E-mail',
    autoComplete: 'off',
    loading: false,
    disabled: false,
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
    autoComplete: {
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

type FormData = {
  description: string;
};

const initialValues: FormData = {
  description: '',
};

const SampleSchema = Yup.object().shape({
  description: Yup.string().min(5).required('Description is required'),
});

const Template: Story = (args) => {
  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(SampleSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = useCallback(async (values: FormData) => {
    console.log(values);
  }, []);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 space-y-4">
        <Textarea
          {...args}
          id="description"
          name="description"
          label="A little bit about you"
          autoComplete="off"
          loading={isSubmitting}
        />
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
