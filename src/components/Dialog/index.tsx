import React from 'react';
import { DialogStateReturn } from 'reakit';

import { CSS } from '../../../stitches.config';
import { Button } from '../Button';
import { Text } from '../Text';
import { ScrollArea } from '../ScrollArea';
import * as S from './styles';
import { Icon } from 'components/Icon';

export type DialogProps = {
  children?: React.ReactNode;
  dialog: DialogStateReturn;
  title: string;
  content?: string;
  onPrimaryClick?: () => void;
  onPrimaryLabel?: string;
  css?: CSS;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'transactional' | 'delete';
};

export const Dialog = ({
  dialog,
  children,
  title,
  css,
  size,
  content,
  onPrimaryClick,
  onPrimaryLabel,
  variant = 'transactional',
}: DialogProps) => {
  return (
    <>
      <S.PanelOverlay {...dialog} />
      <S.Container
        {...dialog}
        tabIndex={0}
        aria-label={title}
        css={css}
        size={size}
      >
        <S.PanelTitle>
          {variant === 'delete' && (
            <Icon name="alert" color="danger" size="lg" />
          )}
          <Text
            size={variant === 'delete' ? 'lg' : 'base'}
            css={{
              ml: variant === 'delete' ? '$3' : '$0',
            }}
          >
            {title}
          </Text>
          <Button
            onClick={dialog.hide}
            icon="close"
            variant="icon"
            label="Feche o painel"
            size="sm"
            css={{ position: 'absolute', right: '$3', top: '$2', p: '$1' }}
          />
        </S.PanelTitle>

        <ScrollArea>
          {!content && <S.PanelContent>{children}</S.PanelContent>}
          {!!content && <Text css={{ p: '$5' }}>{content}</Text>}
        </ScrollArea>

        <S.PanelFooter size={size}>
          <Button
            type="button"
            variant="flat"
            onClick={dialog.hide}
            label="Cancelar"
            size="sm"
            fullWidth={size === 'sm' ? true : false}
            css={{ px: size !== 'sm' ? '$10' : 'inherit' }}
          />
          <Button
            type="submit"
            variant={
              variant === 'transactional'
                ? 'success'
                : variant === 'delete'
                ? 'danger'
                : 'flat'
            }
            onClick={onPrimaryClick}
            label={onPrimaryLabel}
            size="sm"
            fullWidth={size === 'sm' ? true : false}
            css={{ px: size !== 'sm' ? '$10' : 'inherit' }}
          />
        </S.PanelFooter>
      </S.Container>
    </>
  );
};
