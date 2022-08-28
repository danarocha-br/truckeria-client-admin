import React, { useEffect } from 'react';

import NextLink from 'next/link';

import {
  TextInput,
  AuthLayout,
  Box,
  Text,
  Button,
  FormControl,
  Link,
  Callout,
} from 'components';

import { useFormWithSchemaBuilder } from 'hooks/useFormWithSchema';
import { useAuth } from 'hooks/useAuth';
import { ERROR_MESSAGES } from 'constants/index';
import { NewUserCredentials } from 'hooks/useAuth';
import { useRouter } from 'next/router';

const defaultValues: NewUserCredentials = {
  // name: '',
  email: '',
  password: '',
};

const SignUp = () => {
  const { signUp, user, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [router, user]);

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    control,
  } = useFormWithSchemaBuilder(
    (yup) =>
      yup.object({
        // name: yup
        //   .string()
        //   .min(3, ERROR_MESSAGES.VALIDATION.NAME.MIN)
        //   .required(ERROR_MESSAGES.VALIDATION.NAME.REQUIRED),
        email: yup
          .string()
          .email(ERROR_MESSAGES.VALIDATION.EMAIL.MESSAGE)
          .required(ERROR_MESSAGES.VALIDATION.EMAIL.REQUIRED),
        password: yup
          .string()
          .min(6, ERROR_MESSAGES.VALIDATION.PASSWORD.MIN)
          .required(ERROR_MESSAGES.VALIDATION.PASSWORD.REQUIRED),
      }),
    { defaultValues: { ...defaultValues }, mode: 'onChange' }
  );

  const onSubmit = (values: NewUserCredentials) => {
    try {
      signUp(values);
    } catch (error) {
      return;
    }
  };

  return (
    <AuthLayout title={'Crie sua conta grátis'} position="right">
      <Box
        css={{
          position: 'absolute',
          right: '$5',
          top: '$7',
          transform: 'scale(0.94)',
        }}
      >
        <Text as="p" color="subdued">
          Já possui uma conta?{' '}
          <Link
            as={NextLink}
            label="Faça o login."
            href="/auth/sign-in"
            variant="inline"
            css={{ ml: '$2' }}
          />
        </Text>
      </Box>

      <FormControl onSubmit={handleSubmit(onSubmit)}>
        {/* <TextInput
          name="name"
          label="Nome completo"
          control={control}
          icon="mail"
        /> */}
        <TextInput
          name="email"
          label="E-mail"
          control={control}
          inputMode="email"
          icon="mail"
          autoComplete="email"
        />
        <TextInput
          name="password"
          label="Senha"
          control={control}
          icon="lock"
          type="password"
          autoComplete="current-password"
        />

        {!!error && (
          <Callout title={error.title} variant="danger">
            {error.description}
          </Callout>
        )}

        <Button
          label="Cadastrar"
          fullWidth
          type="submit"
          disabled={!isValid}
          loading={isSubmitting}
        />
        <Text
          as="p"
          color="subdued"
          align="center"
          css={{ mt: '$6', lineHeight: '1.7rem' }}
        >
          Ao criar sua conta, você concorda com nossa{' '}
          <Link
            as={NextLink}
            label="Política de Privacidade"
            href="/privacy-policy"
            variant="inline"
          />{' '}
          e{' '}
          <Link
            as={NextLink}
            label="Termos e Condições"
            href="/terms-and-conditions"
            variant="inline"
          />
          .
        </Text>
      </FormControl>
    </AuthLayout>
  );
};

export default SignUp;
