import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  FormControl,
} from 'components';

import SectionBlock from '../SectionBlock';
import { data as product } from '../mock';

import { IProduct } from '..';

const ComboForm = () => {
  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    // control,
    // watch,
    // setValue,
  } = useForm<IProduct>({
    // resolver: yupResolver(schema),
    // defaultValues: { ...defaultValues },
    mode: 'onChange',
  });

  function onSubmit(values: IProduct) {
    console.log(values);
  }

  const comboSteps = 2;

  return (
    <Box
      css={{
        h: '$full',
        mt: '$4',
        px: '$4',

        '@bp-md': { pr: '$7' },
      }}
    >
      {/** Toolbar */}
      <Flex justify="between" align="center" css={{ mb: '$4' }}>
        <Breadcrumb ariaLabel="Navegação">
          <BreadcrumbItem as={Link} href="/products" label="Produtos" />
          <BreadcrumbItem
            as={Link}
            href={`/products/${product.id}`}
            label={product.name}
            isActive
          />
        </Breadcrumb>

        <Button
          size="sm"
          label="Adicionar passo"
          variant="primary"
          disabled={!isValid}
          loading={isSubmitting}
        />
      </Flex>

      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <SectionBlock
          title={`${comboSteps} `}
          description="Informações básicas do seu produto. Dê ao seu produto um nome interno (ele aparecerá na sua área admin)."
        >
          hey
        </SectionBlock>
      </FormControl>
    </Box>
  );
};

export default ComboForm;
