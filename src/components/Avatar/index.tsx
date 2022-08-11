import React from 'react';

import * as S from './styles';

export type AvatarProps = {
  user: string;
  imageURL?: string;
  size?: 'sm' | 'md';
};

export const Avatar = ({ user, imageURL, size = 'md' }: AvatarProps) => (
  <S.AvatarRoot size={size}>
    <S.AvatarImage src={imageURL && imageURL} alt={user} />
    <S.AvatarFallback size={size} delayMs={600}>
      {getInitials(user)}
    </S.AvatarFallback>
  </S.AvatarRoot>
);

function getInitials(name: string) {
  return (
    name &&
    name
      .trim()
      .split(' ')
      .reduce((initial, name) => initial + name[0], '')
      .slice(0, 2)
      .toUpperCase()
  );
}
