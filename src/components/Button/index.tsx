import * as React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import * as S from './styles';

export type ButtonProps = {
  label?: string;
  ariaLabel?: string;
  icon?: JSX.Element | string | IconType;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean | number;
  disabled?: boolean | number;
  color?: 'primary' | 'success';
  variant?: 'default' | 'icon';
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  label,
  ariaLabel,
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  variant = 'default',
  color = 'primary',
  onClick,
  ...props
}: ButtonProps) => (
  <S.Button
    aria-label={ariaLabel ? ariaLabel : label}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    color={color}
    variant={variant}
    onClick={onClick}
    loading={Number(loading)}
    disabled={loading || disabled}
    {...props}
  >
    {!!icon && <i aria-hidden="true">{icon}</i>}
    {variant !== 'icon' && label}
    {loading && (
      <AiOutlineLoading3Quarters
        color="white"
        className="ml-5 -mr-4 animate-spin"
        aria-hidden="true"
      />
    )}
  </S.Button>
);

export default Button;
