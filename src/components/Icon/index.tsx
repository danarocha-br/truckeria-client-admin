//@ts-noCheck
import React from 'react';

import { iconPath } from './iconPath';
import * as S from './styles';

export type IconColorProps =
  | 'default'
  | 'subdued'
  | 'success'
  | 'danger'
  | 'warning'
  | 'current'
  | 'brand'
  | 'onInteractive';

export type IconProps = {
  name: keyof typeof iconPath;
  color?: IconColorProps;
  /** Accessibility naming. */
  label?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
} & React.ComponentProps<typeof S.SVG>;

export * from './iconPath';

export const Icon = ({
  color = 'subdued',
  size = 'base',
  name = 'plus',
  label,
  ...props
}: IconProps) => (
  <S.SVG
    color={color}
    size={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label={label}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d={iconPath[name]} fillRule="evenodd" clipRule="evenodd" />
  </S.SVG>
);
