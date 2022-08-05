import * as React from 'react';
import { CSS } from '@stitches/react';

import * as S from './styles';
import { config } from '../../../stitches.config';

export type LinkProps = {
  /** to render a wrapper to the a tag */
  as?: React.ElementType<any>;
  href: string;
  label?: string;
  /** if you need special link description */
  ariaLabel?: string;
  className?: string;
  variant?: 'standalone' | 'inline';
  css?: CSS<typeof config>;
};

export const Link = ({
  href,
  as,
  label,
  ariaLabel,
  className,
  variant = 'standalone',
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
          {...props}
        >
          {label}
        </S.AnchorInline>
      )}
    </Component>
  );
};
