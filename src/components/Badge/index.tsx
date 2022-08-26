import React, { useMemo } from 'react';
import { readableColor } from 'polished';

import * as S from './styles';
import { FOOD_TAGS } from 'constants/index';
import { colors } from 'styles/tokens';
import { transformTextToInitials } from 'utils/transformTextToInitials';
import { CSS } from '../../../stitches.config';
import { Icon, iconPath } from '../Icon';

export type BadgeProps = {
  variant?: 'food' | 'default' | 'circle' | 'icon';
  foodTag?: string;
  label?: string | number;
  ariaLabel?: string;
  color?: 'neutral' | 'brand' | 'dark';
  icon?: keyof typeof iconPath;
  css?: CSS;
  className?: string;
  onDark?: boolean;
};

export const Badge = ({
  variant = 'default',
  foodTag,
  label,
  ariaLabel,
  color,
  css,
  icon,
  className,
  onDark = false,
  ...props
}: BadgeProps) => {
  const foodColor = useMemo(() => {
    return (
      FOOD_TAGS.find((tag) => tag.key === foodTag)?.color || colors.yellow[300]
    );
  }, [foodTag]);

  const foodLabel = useMemo(() => {
    return FOOD_TAGS.find((tag) => tag.key === foodTag)?.value;
  }, [foodTag]);

  const getColor =
    variant === 'food'
      ? foodColor
      : color === 'brand'
      ? colors.brand
      : color === 'neutral'
      ? colors.neutral[500]
      : colors.neutral[800];

  return (
    <S.Container
      className={className}
      aria-label={ariaLabel}
      variant={variant}
      onDark={onDark}
      css={{
        color: readableColor(getColor, colors.neutral[900], colors.white),
        bg: getColor,
        ...css,
      }}
      {...props}
    >
      {!!icon && (
        <Icon
          name={icon}
          size="sm"
          css={{ transform: 'scale(0.85)' }}
          color="onInteractive"
        />
      )}

      {foodTag && !label && foodTag.length > 4
        ? transformTextToInitials(foodLabel || '0')
        : foodLabel}

      {label && !foodTag && label}
    </S.Container>
  );
};
