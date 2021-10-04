import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { HiLockClosed } from 'react-icons/hi';

import AuthLayout from 'layouts/AuthLayout';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import FormControl from 'components/FormControl';

export type FormData = {
  token: string;
  password: string;
  confirm_password: string;
};

const initialValues: FormData = {
  token: '',
  password: '',
  confirm_password: '',
};

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Please enter a valid password.').min(6),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Your passwords must match.'
  ),
});

export default function ResetPassword() {
  const router = useRouter();

  const methods = useForm<FormData>({
    defaultValues: { ...initialValues },
    mode: 'all',
    resolver: yupResolver<Yup.AnyObjectSchema>(ResetPasswordSchema),
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
        title="Need to reset your password?"
        position="right"
        image="https://res.cloudinary.com/danarocha/image/upload/v1633350908/truckeria/truckeria-icon-bck_gtmtri.jpg"
      >
        <FormProvider {...methods}>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              id="password"
              type="password"
              name="password"
              label="Your New Password"
              icon={HiLockClosed}
              loading={isSubmitting}
            />
            <TextInput
              id="confirm_password"
              type="password"
              name="confirm_password"
              label="Confirm your Password"
              icon={HiLockClosed}
              loading={isSubmitting}
            />

            <Button
              label="Change Password"
              type="submit"
              fullWidth
              loading={isSubmitting}
              disabled={!isValid || isSubmitting}
            />
          </FormControl>
        </FormProvider>
      </AuthLayout>
    </>
  );
}
