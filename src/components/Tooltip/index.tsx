import React from 'react';
import {
  Portal as TooltipPrimitivePortal,
  TooltipContentProps,
} from '@radix-ui/react-tooltip';

import * as S from './styles';

type TooltipContentCustomProps = {
  children: React.ReactNode;
} & TooltipContentProps;

export type CustomTooltipProps = {
  children: React.ReactNode;
  content: string;
  shortcut?: string;
} & TooltipContentProps;

function TooltipContent({ children, ...props }: TooltipContentCustomProps) {
  return (
    <TooltipPrimitivePortal>
      <S.TooltipContent {...props}>
        {children}
        <S.TooltipArrow />
      </S.TooltipContent>
    </TooltipPrimitivePortal>
  );
}

export const Tooltip = ({
  children,
  content,
  shortcut,
  ...props
}: CustomTooltipProps) => (
  <S.TooltipProvider>
    <S.TooltipRoot delayDuration={300}>
      <S.TooltipTrigger asChild>
        <div>{children}</div>
      </S.TooltipTrigger>

      <TooltipContent sideOffset={5} {...props}>
        {content}

        {!!shortcut && <S.RightSlot>{shortcut}</S.RightSlot>}
      </TooltipContent>
    </S.TooltipRoot>
  </S.TooltipProvider>
);
