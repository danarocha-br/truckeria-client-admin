import { useCallback } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { AnyObjectSchema } from 'yup';
import { HiOutlineMail } from 'react-icons/hi';

import TextInput from '.';

export default {
  title: 'Form Controls/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    icon: { HiOutlineMail },
    autoComplete: 'email',
    inputMode: 'email',
    loading: false,
    disabled: false,
    readOnly: false,
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
    type: {
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
    readOnly: {
      table: {
        category: 'Modifiers',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta;

type FormData = {
  email: string;
};

const initialValues: FormData = {
  email: '',
};

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid e-mail.')
    .required('E-mail is required'),
});

const Template: Story = (args) => {
  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(SignInSchema),
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
        <TextInput
          {...args}
          id="email"
          type="email"
          name="email"
          aria-label="E-mail"
          label="E-mail"
          icon={HiOutlineMail}
          autoComplete="email"
          inputMode="email"
          loading={isSubmitting}
        />
        {/* <Button
              label="Sign In"
              type="submit"
              fullWidth
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}
            /> */}
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ReadOnly: true,
};
