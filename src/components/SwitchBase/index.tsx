import React, { forwardRef } from 'react';
import { SwitchProps as PrimitiveSwitchProps } from '@radix-ui/react-switch';

import { Text } from '../Text';
import { InfoButton } from '../InfoButton';
import * as S from './styles';
import { CSS } from '../../../stitches.config';

export type SwitchProps = {
  label: string;
  name: string;
  disabled?: boolean;
  errors?: any | undefined;
  tooltip?: string;
  css?: CSS;
} & PrimitiveSwitchProps;

type Ref = HTMLButtonElement | null;

export const SwitchBase = forwardRef<Ref, SwitchProps>(
  ({ name, label, defaultChecked, errors, tooltip, ...props }, ref) => {
    const areErrorsEmpty = !!errors && Object.keys(errors).length === 0;

    return (
      <>
        <S.Label id={name}>
          <S.SwitchRoot
            ref={ref}
            id={name}
            name={name}
            defaultChecked={defaultChecked}
            hasError={!!errors && !areErrorsEmpty ? true : false}
            aria-invalid={!!errors && !areErrorsEmpty ? 'true' : 'false'}
            aria-describedby={!errors && !areErrorsEmpty && errors.message}
            {...props}
          >
            <S.SwitchThumb />
          </S.SwitchRoot>
          <Text size="sm">{label}</Text>

          {!!tooltip && (
            <InfoButton
              content={tooltip}
              size="sm"
              css={{
                opacity: 0.6,
              }}
            />
          )}
        </S.Label>

        {!!errors && !areErrorsEmpty ? (
          <Text
            role="alert"
            color="danger"
            size="sm"
            css={{ ml: '$10', mt: '$-4' }}
          >
            {errors.message}
          </Text>
        ) : null}
      </>
    );
  }
);
