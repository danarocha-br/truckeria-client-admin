import React, { forwardRef, useState } from 'react';
import { CSS } from '../../../stitches.config';

import { Icon, iconPath } from '../Icon';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { InfoButton } from '../InfoButton';
import * as S from './styles';

export type RadioGroupOptionsProps = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioGroupBaseProps = {
  legend?: string;
  name: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  options: RadioGroupOptionsProps[];
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  hasValue?: boolean;
  icon?: keyof typeof iconPath;
  errors?: any | undefined;
  tooltip?: string;
  value: string;
  css?: CSS;
  onChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLButtonElement | null;

export const RadioGroupBase = forwardRef<Ref, RadioGroupBaseProps>(
  (
    {
      name,
      value,
      onChange,
      defaultValue,
      errors,
      tooltip,
      legend,
      options = [],
      css,
    },
    ref
  ) => {
    const [focusId, setFocusId] = useState('');

    const optionsWithIds = options.map((option) => {
      const clone = { ...option };
      clone.value = clone.value || `radio-option-${name}-${option.value}`;
      return clone;
    });

    const handleInitialWrapperFocus = () => {
      if (!focusId) {
        setFocusId(optionsWithIds[0].value);
      }
    };

    const labelId = `radio-label-${name}`;

    const areErrorsEmpty = !!errors && Object.keys(errors).length === 0;

    return (
      <S.Fieldset
        tabIndex={0}
        aria-labelledby={legend}
        aria-activedescendant={focusId}
        onFocus={handleInitialWrapperFocus}
        css={css}
      >
        <S.RadioGroupRoot
          defaultValue={defaultValue}
          value={value}
          onValueChange={onChange}
          aria-label="Tipo do grupo"
        >
          {!!legend && (
            <Flex align="center" gap="2">
              <Text
                as="legend"
                size="sm"
                weight="medium"
                css={{ mb: '$1' }}
                id={labelId}
              >
                {legend}
              </Text>

              {!!tooltip && areErrorsEmpty && (
                <InfoButton content={tooltip} size="sm" />
              )}
            </Flex>
          )}

          <Flex gap="8" justify="start">
            {React.Children.toArray(
              optionsWithIds.map((option) => (
                <Flex align="center" css={{ w: 'auto' }}>
                  <S.Radio
                    ref={ref}
                    value={option.value}
                    id={option.value}
                    disabled={option.disabled}
                  >
                    <S.Indicator />
                  </S.Radio>
                  <S.Label htmlFor={option.value} disabled={option.disabled}>
                    {option.label}
                  </S.Label>
                </Flex>
              ))
            )}
          </Flex>
        </S.RadioGroupRoot>

        {!!errors && !areErrorsEmpty && (
          <Text
            role="alert"
            color="onInteractive"
            size="sm"
            css={{
              bg: '$surface-danger-disabled',
              mt: '$4',
              w: '$full',
              borderRadius: '$xs',
              px: '$2',
              py: '$1',
              d: 'flex',
              alignItems: 'center',
              gap: '$3',
            }}
          >
            <Icon name="alert" color="onInteractive" size="sm" />
            {errors.message}
          </Text>
        )}
      </S.Fieldset>
    );
  }
);
