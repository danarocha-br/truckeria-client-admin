import React from 'react';
import NextLink from 'next/link';

import {
  Box,
  Text,
  Button,
  FormControl,
  Link,
  Flex,
  TextInput,
  AuthLayout,
} from 'components';

import { useFormWithSchemaBuilder } from 'hooks/useFormWithSchema';
import { ERROR_MESSAGES } from 'constants/index';
import { useAuth } from 'hooks/useAuth';

type Credentials = {
  email: string;
  password: string;
};

const defaultValues: Credentials = {
  email: '',
  password: '',
};

const SignIn = () => {
  const { signIn } = useAuth();

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    control,
  } = useFormWithSchemaBuilder(
    (yup) =>
      yup.object({
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

  const onSubmit = (values: Credentials) => {
    signIn(values);
  };

  return (
    <AuthLayout title="Faça o seu login">
      <Box
        css={{
          position: 'absolute',
          right: '$5',
          top: '$7',
          transform: 'scale(0.94)',
        }}
      >
        <Text as="p" color="subdued">
          Não tem uma conta?{' '}
          <Link
            as={NextLink}
            label="Experimente grátis."
            href="/auth/sign-up"
            variant="inline"
            css={{ ml: '$2' }}
          />
        </Text>
      </Box>

      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          label="E-mail"
          control={control}
          inputMode="email"
          icon="mail"
          autoComplete="username"
        />
        <TextInput
          name="password"
          label="Senha"
          control={control}
          icon="lock"
          type="password"
          autoComplete="current-password"
        />
        <Button
          label="Entrar"
          fullWidth
          type="submit"
          disabled={!isValid}
          loading={isSubmitting}
        />
        <Flex align="center" justify="center" fullWidth css={{ mt: '$8' }}>
          <Link
            as={NextLink}
            label="Esqueci minha senha"
            href="/auth/forgot-password"
          />
        </Flex>
      </FormControl>
    </AuthLayout>
  );
};

export default SignIn;
