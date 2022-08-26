import * as React from 'react';
import { InputHTMLAttributes, useCallback, useState, forwardRef } from 'react';
import { CSS } from '@stitches/react';
import { NumberFormatProps } from 'react-number-format';

import { Flex } from '../Flex';
import { iconPath, Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { FormError } from '../FormError';
import { Box } from '../Box';
import * as TextInput from '../TextInputBase/styles';
import * as S from './styles';

import { config } from '../../../stitches.config';

export type NumberInputProps = {
  name: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  hasValue?: boolean;
  icon?: keyof typeof iconPath;
  errors?: any | undefined;
  css?: CSS<typeof config>;
} & InputHTMLAttributes<HTMLInputElement> &
  NumberFormatProps;

type Ref = HTMLInputElement | null;

export const NumberInput = forwardRef<Ref, NumberInputProps>(
  (
    {
      name,
      icon,
      defaultValue,
      label,
      placeholder,
      disabled = false,
      loading = false,
      readOnly = false,
      hasValue = false,
      onValueChange,
      allowNegative,
      decimalScale,
      errors,
      ...props
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    /**
     * Get UI States
     */
    const [hasFocus, setFocus] = useState(false);

    const handleInputFocus = useCallback(() => {
      setFocus(true);
    }, [setFocus]);

    const handleInputBlur = useCallback(() => {
      setFocus(false);
    }, [setFocus]);

    const areErrorsEmpty = !!errors && Object.keys(errors).length === 0;

    return (
      <Flex direction="column" fullWidth>
        <TextInput.Container
          hasError={!!errors && !areErrorsEmpty ? true : false}
          isDisabled={disabled}
          isLoading={loading}
          readOnly={readOnly}
          hasFocus={hasFocus}
        >
          <S.Input
            //@ts-ignore
            ref={ref}
            id={name}
            aria-invalid={!!errors && !areErrorsEmpty ? 'true' : 'false'}
            aria-describedby={!errors && !areErrorsEmpty && errors.message}
            placeholder={placeholder}
            hasPlaceholder={!!placeholder}
            hasValue={hasValue}
            hasFocus={hasFocus}
            hasError={!!errors && !areErrorsEmpty ? true : false}
            name={name}
            thousandsGroupStyle="thousand"
            allowNegative={allowNegative}
            decimalScale={decimalScale}
            onValueChange={onValueChange}
            defaultValue={defaultValue}
            {...props}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled || loading}
            readOnly={readOnly}
            inputMode="numeric"
            hasIcon={!!icon}
          />

          <TextInput.Label
            aria-labelledby={label}
            htmlFor={name}
            isDisabled={disabled || loading}
            hasValue={hasValue}
            hasPlaceholder={!!placeholder}
            hasIcon={!!icon}
          >
            {!!icon && <Icon className="c-input__icon" name={icon} />}
            <span className="c-input__label">{label}</span>

            {!!errors && !areErrorsEmpty && (
              <Icon
                name="alert"
                className="c-input__error-icon"
                css={{ position: 'absolute', right: '$4' }}
              />
            )}

            {loading && (
              <Box css={{ position: 'absolute', right: '$4' }}>
                <Spinner size="xs" />
              </Box>
            )}
          </TextInput.Label>
        </TextInput.Container>

        {!!errors && !areErrorsEmpty ? (
          <FormError message={errors.message} />
        ) : null}
      </Flex>
    );
  }
);
