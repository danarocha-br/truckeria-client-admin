/* eslint-disable react/no-unescaped-entities */
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';

import { HiOutlineMail } from 'react-icons/hi';

import AuthLayout from 'layouts/AuthLayout';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
// import Link from 'components/Link';

export type FormData = {
  email: string;
};

const initialValues: FormData = {
  email: '',
};

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid e-mail.')
    .required('E-mail is required'),
});

export default function ForgotPassword() {
  const router = useRouter();

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'all',
    resolver: yupResolver<Yup.AnyObjectSchema>(ForgotPasswordSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmit = useCallback(
    async (values: FormData) => {
      console.log(values);
      router.push('/sign-in');
    },
    [router]
  );

  return (
    <>
      <AuthLayout
        to="/sign-in"
        linkLabel="Login"
        title="Forgot your password?"
        subtitle="It happens to the best of us."
        position="right"
        image="https://res.cloudinary.com/danarocha/image/upload/v1633350908/truckeria/truckeria-icon-bck_gtmtri.jpg"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
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

            <Button
              label="Reset my Password"
              type="submit"
              fullWidth
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}
            />
          </form>
        </FormProvider>
      </AuthLayout>
      {/* <AuthLayout
        to="/sign-in"
        linkLabel="Login"
        title="Don't worry, help is on the way."
        position="right"
        image="https://res.cloudinary.com/danarocha/image/upload/v1633350908/truckeria/truckeria-icon-bck_gtmtri.jpg"
      >
        <p className="text-center">
          We just sent an email to{' '}
          <Link
            to="mailto:"
            label="dana@danarocha.com.br"
            variant="inline"
          ></Link>{' '}
          with instructions on how to reset your password.
        </p>
      </AuthLayout>*/}
    </>
  );
}
