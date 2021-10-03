/* eslint-disable react/no-unescaped-entities */
import { useCallback, useContext } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { ThemeContext } from 'styled-components';

import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from 'react-icons/hi';

import AuthLayout from 'layouts/AuthLayout';
import TextInput from 'components/TextInput';
import Button from 'components/Button';

export type FormData = {
  name: string;
  email: string;
  password: string;
};

const initialValues: FormData = {
  name: '',
  email: '',
  password: '',
};

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is required'),
  email: Yup.string()
    .email('Please provide a valid e-mail.')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain minimum of 6 caracters.')
    .required('Password is required'),
});

export default function SignUp() {
  const router = useRouter();
  const theme = useContext(ThemeContext);

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'all',
    resolver: yupResolver<Yup.AnyObjectSchema>(SignUpSchema),
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
        to="/sign-in"
        linkLabel="I alredy have an account"
        title="Join and Manage your Food Trucks"
        subtitle="A service built to help you manage your business. Join in seconds!"
        position="right"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            <TextInput
              id="name"
              name="name"
              label="Your Full Name"
              icon={HiOutlineUserCircle}
              autoComplete="email"
              inputMode="email"
              loading={isSubmitting}
            />
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
          </form>

          <p
            className="text-center mt-10"
            style={{
              color: `${theme.text.subdued}`,
            }}
          >
            By signing up, I agree to Truckeria's{' '}
            <NextLink href="/">
              <a
                className="font-medium"
                href=""
                style={{ color: `${theme.interactive.default}` }}
              >
                Terms & Conditions
              </a>
            </NextLink>{' '}
            and{' '}
            <NextLink href="/">
              <a
                className="font-medium"
                href=""
                style={{ color: `${theme.interactive.default}` }}
              >
                Privacy Policy
              </a>
            </NextLink>
            .
          </p>
        </FormProvider>
      </AuthLayout>
    </>
  );
}
