import React from 'react';

import * as S from './styles';
import { transformTextToInitials } from 'utils/transformTextToInitials';

export type AvatarProps = {
  user: string;
  imageURL?: string;
  size?: 'sm' | 'md';
};

export const Avatar = ({ user, imageURL, size = 'md' }: AvatarProps) => (
  <S.AvatarRoot size={size}>
    <S.AvatarImage src={imageURL && imageURL} alt={user} />
    <S.AvatarFallback size={size} delayMs={600}>
      {transformTextToInitials(user)}
    </S.AvatarFallback>
  </S.AvatarRoot>
);
