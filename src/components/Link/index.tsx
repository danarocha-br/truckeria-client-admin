import * as React from 'react';
import Link from 'next/link';

import * as S from './styles';

type LinkProps = {
  to: string;
  label?: string;
  /** if you need special link description */
  ariaLabel?: string;
  className?: string;
  variant?: 'standalone' | 'inline';
};

const CustomLink = ({
  to,
  label,
  ariaLabel,
  className,
  variant = 'standalone',
}: LinkProps) => (
  <Link href={to} passHref>
    {variant === 'standalone' ? (
      <S.Anchor
        className={className}
        aria-label={ariaLabel ? ariaLabel : label}
      >
        {label}
      </S.Anchor>
    ) : (
      <S.AnchorInline
        className={className}
        aria-label={ariaLabel ? ariaLabel : label}
      >
        {label}
      </S.AnchorInline>
    )}
  </Link>
);

export default CustomLink;
