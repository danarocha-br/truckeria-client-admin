import React from 'react';

import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Box } from '../Box';
import * as S from './styles';
import { CSS } from '../../../stitches.config';

export type InfoButtonProps = {
  content: string;
  css?: CSS;
  size?: 'sm' | 'md';
};

export const InfoButton = ({ content, css, size = 'md' }: InfoButtonProps) => (
  <Box css={css}>
    <Tooltip content={content}>
      <S.Container size={size}>
        <Icon name="info" color="subdued" size="sm" />
      </S.Container>
    </Tooltip>
  </Box>
);
