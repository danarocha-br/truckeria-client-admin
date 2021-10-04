import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';

import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

import AuthLayout from 'layouts/AuthLayout';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Link from 'components/Link';
import FormControl from 'components/FormControl';

export type FormData = {
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

export default function SignIn() {
  const router = useRouter();

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'all',
    resolver: yupResolver<Yup.AnyObjectSchema>(SignInSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = useCallback(
    async (values: FormData) => {
      console.log(values);
      router.push('/');
    },

    [router]
  );

  return (
    <>
      <AuthLayout
        to="/sign-up"
        linkLabel="I don't have an account"
        title="Welcome back!"
      >
        <FormProvider {...methods}>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
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
              label="Your password"
              icon={HiOutlineLockClosed}
              autoComplete="password"
              loading={isSubmitting}
            />
            <Button
              label="Sign In"
              type="submit"
              fullWidth
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}
            />
          </FormControl>
          <Link
            to="/forgot-password"
            label="Forgot password?"
            className="mt-10"
          />
        </FormProvider>
      </AuthLayout>
    </>
  );
}
