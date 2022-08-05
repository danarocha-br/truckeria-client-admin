import React from 'react';
import { CSS } from '@stitches/react';

import { iconPath, Icon } from '../Icon';
import { Flex } from '../Flex';
import * as S from './styles';

export type CalloutProps = {
  title?: string;
  children: React.ReactNode;
  icon?: keyof typeof iconPath;
  variant?: 'info' | 'success' | 'danger' | 'warning';
  css?: CSS;
};

export const Callout = ({
  title,
  children,
  icon,
  variant = 'info',
  css,
  ...props
}: CalloutProps) => (
  <S.Container variant={variant} css={css} {...props}>
    <S.Marker variant={variant} />
    <Flex direction="column" fullWidth>
      {!!title && (
        <S.Header variant={variant}>
          {!!icon && <Icon name={icon} color="current" />}
          <h5>{title}</h5>
        </S.Header>
      )}
      <span className="callout__content">{children}</span>
    </Flex>
  </S.Container>
);
