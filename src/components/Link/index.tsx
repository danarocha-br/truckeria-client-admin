import * as React from 'react';
import Link from 'next/link';

import * as S from './styles';

type LinkProps = {
  to: string;
  label?: string;
  /** if you need special link description */
  ariaLabel?: string;
  className?: string;
};

const CustomLink = ({ to, label, ariaLabel, className }: LinkProps) => (
  <Link href={to} passHref>
    <S.Anchor className={className} aria-label={ariaLabel ? ariaLabel : label}>
      {label}
    </S.Anchor>
  </Link>
);

export default CustomLink;
