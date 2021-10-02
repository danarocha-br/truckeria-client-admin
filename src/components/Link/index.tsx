import Link from 'next/link';

import * as S from './styles';

type LinkProps = {
  to: string;
  label: string;
  /** if you need special link description */
  ariaLabel?: string;
};

const CustomLink = ({ to, label, ariaLabel }: LinkProps) => (
  <Link href={to} passHref>
    <S.Anchor aria-label={ariaLabel ? ariaLabel : label}>{label}</S.Anchor>
  </Link>
);

export default CustomLink;
