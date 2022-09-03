import React from 'react';
import {
  AccordionContentProps,
  AccordionTriggerProps,
} from '@radix-ui/react-accordion';

import { Box } from '../Box';
import { Icon } from '../Icon';
import * as S from './styles';
import { CSS } from '../../../stitches.config';

export type AccordionProps = {
  children: React.ReactNode;
  defaultValue: string;
  css?: CSS;
};

export type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  title: string;
  headerSlot?: React.ReactNode;
};

const AccordionTrigger = ({ children, ...props }: AccordionTriggerProps) => (
  <S.AccordionHeader>
    <S.AccordionTrigger {...props}>
      {children}
      <Icon
        name="chevronDown"
        className="accordion__trigger"
        css={{ ml: '$7' }}
      />
    </S.AccordionTrigger>
  </S.AccordionHeader>
);

const AccordionContent = ({ children, ...props }: AccordionContentProps) => (
  <S.AccordionContent {...props}>
    <Box>{children}</Box>
  </S.AccordionContent>
);

export const AccordionItem = ({
  children,
  value,
  title,
  headerSlot,
  ...props
}: AccordionItemProps) => (
  <S.AccordionItem value={value} {...props}>
    <AccordionTrigger>
      {title}
      {headerSlot}
    </AccordionTrigger>
    <AccordionContent>{children}</AccordionContent>
  </S.AccordionItem>
);

export const Accordion = ({ children, css, defaultValue }: AccordionProps) => (
  <S.AccordionRoot
    type="single"
    defaultValue={defaultValue}
    collapsible
    css={css}
  >
    {children}
  </S.AccordionRoot>
);
