import React, { useEffect } from 'react';
import NextLink from 'next/link';

import { Box, Text, Button, Link, Callout, Flex, AuthLayout } from 'components';

import { useAuth } from 'hooks/useAuth';
import { ERROR_MESSAGES } from 'constants/index';
import { useRouter } from 'next/router';

const ConfirmationEmail = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <AuthLayout title={'Estamos quase lá!'}>
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

      <Flex direction="column" align="center">
        <Callout
          variant="success"
          title={ERROR_MESSAGES.EMAIL_CONFIRMATION.TITLE}
        >
          {ERROR_MESSAGES.EMAIL_CONFIRMATION.DESCRIPTION}
        </Callout>

        <Flex
          direction="column"
          align="center"
          css={{
            mb: '$4',
            mt: '$10',
            bg: '$background-subdued',
            borderRadius: '$xs',
            p: '$3',
            w: '$full',
          }}
        >
          <Text as="h2">Não recebeu o e-mail?</Text>
          <Text as="p" size="sm" color="subdued" align="center">
            Confira a sua caixa de Spam. Se também não estiver lá, solicite o
            link novamente
          </Text>
        </Flex>

        <Button
          label="Reenvie o link"
          size="sm"
          variant="flat"
          css={{ p: '$1', h: 40, ml: '$-1' }}
        />
      </Flex>
    </AuthLayout>
  );
};

export default ConfirmationEmail;
