import React from 'react';
import { TabsProps as PrimitiveTabsProps } from '@radix-ui/react-tabs';

import * as S from './styles';
import { CSS } from '../../../stitches.config';

export type TabsProps = {
  children: React.ReactNode;
  css?: CSS;
} & PrimitiveTabsProps;

export type TabListProps = {
  children: React.ReactNode;
  ariaLabel: string;
};

export type TabTitleProps = {
  title: string;
};

export type TabContentProps = {
  title: string;
  children: React.ReactNode;
};

export const TabList = ({ children, ariaLabel }: TabListProps) => {
  return <S.TabList aria-label={ariaLabel}>{children}</S.TabList>;
};
export const TabTitle = ({ title }: TabTitleProps) => {
  return <S.TabTrigger value={title}>{title}</S.TabTrigger>;
};
export const TabContent = ({ children, title }: TabContentProps) => {
  return <S.TabContent value={title}>{children}</S.TabContent>;
};

export const Tabs = ({ children, defaultValue, css }: TabsProps) => {
  return (
    <S.TabRoot defaultValue={defaultValue} css={css}>
      {children}
    </S.TabRoot>
  );
};
