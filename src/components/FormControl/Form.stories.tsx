import { Story, Meta } from '@storybook/react/types-6-0';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { AnyObjectSchema } from 'yup';
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';

import FormControl from '.';
import Button from 'components/Button';
import TextInput from 'components/TextInput';

export default {
  title: 'Form Controls / FormControl',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
} as Meta;

type FormData = {
  email: string;
  password: string;
};

const initialValues: FormData = {
  email: '',
  password: '',
};

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid e-mail.')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain minimum of 6 caracters.')
    .required('Password is required'),
});

const Template: Story = (args) => {
  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'onTouched',
    resolver: yupResolver<AnyObjectSchema>(SignInSchema),
  });

  const {
    formState: { isSubmitting, isValid },
  } = methods;

  return (
    <div className="w-96">
      <FormProvider {...methods}>
        <FormControl onSubmit={() => console.log('submit')} {...args}>
          <TextInput
            id="email"
            type="email"
            name="email"
            label="E-mail"
            icon={HiOutlineMail}
            autoComplete="email"
            inputMode="email"
            loading={isSubmitting}
          />
          <TextInput
            id="password"
            type="password"
            name="password"
            aria-label="Password"
            label="Password"
            icon={HiLockClosed}
            loading={isSubmitting}
          />
          <Button
            label="Send"
            color="success"
            type="submit"
            fullWidth
            loading={isSubmitting}
            disabled={!isValid || isSubmitting}
          ></Button>
        </FormControl>
      </FormProvider>
    </div>
  );
};

export const Default = Template.bind({});
