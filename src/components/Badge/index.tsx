import React, { useMemo } from 'react';
import { readableColor } from 'polished';

import * as S from './styles';
import { FOOD_TAGS } from 'constants/index';
import { colors } from 'styles/tokens';
import { transformTextToInitials } from 'utils/transformTextToInitials';
import { CSS } from '../../../stitches.config';

export type BadgeProps = {
  variant?: 'food' | 'default' | 'circle';
  foodTag?: string;
  label?: string;
  color?: 'neutral' | 'brand';
  css?: CSS;
  className?: string;
};

export const Badge = ({
  variant = 'food',
  foodTag,
  label,
  color,
  css,
  className,
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
      ? colors.neutral[400]
      : colors.neutral[800];

  return (
    <S.Container
      className={className}
      aria-label={foodTag || label}
      variant={variant}
      css={{
        color: readableColor(getColor, colors.neutral[900], colors.white),
        bg: getColor,
        ...css,
      }}
      {...props}
    >
      {foodTag && !label && foodTag.length > 4
        ? transformTextToInitials(foodLabel || '0')
        : foodLabel}

      {label && !foodTag && label}
    </S.Container>
  );
};
