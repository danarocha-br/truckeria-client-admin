import * as React from 'react';
import { CSS } from '@stitches/react';
import NextLink from 'next/link';

import * as S from './styles';
import { config } from '../../../stitches.config';

export type LinkProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof NextLink;
  href: string;
  label?: string;
  /** if you need special link description */
  ariaLabel?: string;
  className?: string;
  variant?: 'standalone' | 'inline' | 'page-header';
  /** to be used with the variant page-header */
  isActive?: boolean;
  css?: CSS<typeof config>;
};

export const Link = ({
  href,
  as,
  label,
  ariaLabel,
  className,
  variant = 'standalone',
  isActive = false,
  css,
  ...props
}: LinkProps) => {
  const Component = as || React.Fragment;

  return (
    <Component href={href} passHref>
      {variant === 'standalone' ? (
        <S.Anchor
          as="a"
          className={className}
          aria-label={ariaLabel ? ariaLabel : label}
          css={css}
          {...props}
        >
          {label}
        </S.Anchor>
      ) : (
        <S.AnchorInline
          as="a"
          className={className}
          aria-label={ariaLabel ? ariaLabel : label}
          css={css}
          appearance={variant === 'page-header' ? 'page-header' : 'inline'}
          isActive={isActive}
          {...props}
        >
          {label}
        </S.AnchorInline>
      )}
    </Component>
  );
};
