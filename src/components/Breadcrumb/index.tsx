import React from 'react';

import { CSS } from '../../../stitches.config';
import * as S from './styles';

export type BreadcrumbProps = {
  ariaLabel?: string;
  children: React.ReactNode;
  css?: CSS;
};

export type BreadcrumbItemProps = {
  as?: any;
  label: string;
  href: string;
  isActive?: boolean | 'true' | undefined;
};

export const Breadcrumb = ({ ariaLabel, css, children }: BreadcrumbProps) => (
  <S.Container
    id="breadcrumb"
    aria-label={ariaLabel || 'Breadcrumb'}
    css={{ css }}
  >
    <ol role="list">{children}</ol>
  </S.Container>
);

export const BreadcrumbItem = ({
  as,
  href,
  isActive,
  label,
}: BreadcrumbItemProps) => {
  const Component = as || React.Fragment;

  return (
    <S.ListItem>
      <Component href={href} passHref>
        <>
          <S.Anchor
            href={href}
            aria-current={isActive ? 'page' : 'false'}
            isActive={isActive}
            aria-label={label}
          >
            {label}
          </S.Anchor>

          <S.Separator />
        </>
      </Component>
    </S.ListItem>
  );
};
