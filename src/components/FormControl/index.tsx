import React from 'react';
import { CSS } from '@stitches/react';

import { Flex } from '../Flex';
import { config } from '../../../stitches.config';

export type FormControlProps = {
  children: React.ReactNode;
  onSubmit: (data: any, event?: React.BaseSyntheticEvent) => any | Promise<any>;
  css?: CSS<typeof config>;
};

export const FormControl = ({
  children,
  onSubmit,
  css,
  ...props
}: FormControlProps) => {
  return (
    <Flex
      as="form"
      direction="column"
      gap={6}
      onSubmit={onSubmit}
      fullWidth
      {...props}
      css={css}
    >
      {children}
    </Flex>
  );
};
