import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { Icon } from '../Icon';
import { Button } from '../Button';
import * as S from './styles';

export type ToastProps = {
  title: string;
  description: string;
  variant?: 'info' | 'success' | 'danger' | 'neutral' | 'warning';
  children: React.ReactNode;
  actionLabel?: string;
  actionOnClick?: () => void;
};

export type ToastHandlesProps = {
  showToast: () => void;
};

export const Toast = forwardRef(
  (
    {
      title,
      description,
      actionLabel,
      actionOnClick,
      variant = 'neutral',
      children,
    }: ToastProps,
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const timerRef = useRef(0);

    useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    const showToast = () => {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
      }, 100);
      timerRef.current = window.setTimeout(() => {
        setOpen(false);
      }, 4000);
    };

    useImperativeHandle(ref, () => ({
      showToast,
    }));

    return (
      <S.ToastProvider swipeDirection="right">
        {children}

        <S.Toast open={open} onOpenChange={setOpen} variant={variant}>
          <S.ToastTitle variant={variant}>
            {variant === 'danger' && <Icon name="alert" color="current" />}
            {variant === 'warning' && <Icon name="alert" color="current" />}
            {variant === 'success' && (
              <Icon name="checkCircle" color="current" />
            )}
            {variant === 'info' && <Icon name="info" color="current" />}
            {title}
          </S.ToastTitle>
          <S.ToastDescription asChild variant={variant}>
            <div>{description}</div>
          </S.ToastDescription>

          {!!actionLabel && (
            <S.ToastAction asChild altText={actionLabel ? actionLabel : ''}>
              <Button
                variant="flat"
                size="sm"
                label={actionLabel}
                onClick={actionOnClick}
                //@ts-ignore
                css={{
                  px: '$2',
                  h: '$8',
                  color:
                    variant === 'warning'
                      ? '$text-contrast'
                      : '$text-onInteractive',
                }}
              />
            </S.ToastAction>
          )}
        </S.Toast>
        <S.ToastViewport />
      </S.ToastProvider>
    );
  }
);
