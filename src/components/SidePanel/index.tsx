import React from 'react';
import { Portal } from 'reakit/Portal';
import { DialogStateReturn } from 'reakit';

import { CSS } from '../../../stitches.config';
import { Button } from '../Button';
import { Text } from '../Text';
import { ScrollArea } from '../ScrollArea';
import * as S from './styles';

export type SidePanelProps = {
  children: React.ReactNode;
  dialog: DialogStateReturn;
  title: string;
  onPrimaryClick?: () => void;
  onPrimaryLabel?: string;
  css?: CSS;
};

export const SidePanel = ({
  dialog,
  children,
  title,
  css,
  onPrimaryClick,
  onPrimaryLabel,
}: SidePanelProps) => {
  return (
    <Portal>
      <S.Container
        {...dialog}
        aria-label={title}
        hideOnClickOutside={false}
        css={css}
      >
        <S.PanelTitle>
          <Text>{title}</Text>
          <Button
            onClick={dialog.hide}
            icon="close"
            variant="icon"
            label="Feche o painel"
            size="sm"
            css={{
              position: 'absolute',
              right: '$3',
              top: '$2',
              p: '$1',

              '&:focus': {
                boxShadow: `0 0 0 1px $colors$neutral800,
              0 0 0 calc(2px + 2px) $colors$action-transparent-transparent`,
              },

              [`.light-theme &`]: {
                bg: '$transparent',
                color: '$text-onInteractive',
                '&:hover': {
                  bg: '$action-transparent-transparent',
                },
                '&:focus': {
                  boxShadow: `0 0 0 1px $colors$neutral500,
                0 0 0 calc(2px + 2px) $colors$action-transparent-transparent`,
                },
              },
            }}
          />
        </S.PanelTitle>

        <ScrollArea>
          <S.PanelContent>{children}</S.PanelContent>
        </ScrollArea>

        <S.PanelFooter>
          <Button
            type="button"
            variant="flat"
            onClick={dialog.hide}
            label="Cancelar"
            size="sm"
            fullWidth
          />
          <Button
            type="submit"
            variant="success"
            onClick={onPrimaryClick}
            label={onPrimaryLabel}
            size="sm"
            fullWidth
          />
        </S.PanelFooter>
      </S.Container>
    </Portal>
  );
};
