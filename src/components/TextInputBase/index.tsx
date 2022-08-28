import * as React from 'react';
import { InputHTMLAttributes, useCallback, useState, forwardRef } from 'react';
import { CSS } from '@stitches/react';

import { Flex } from '../Flex';
import { iconPath, Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { FormError } from '../FormError';
import { InfoButton } from '../InfoButton';
import { Box } from '../Box';
import * as S from './styles';

import { config } from '../../../stitches.config';

export type TextInputProps = {
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
  tooltip?: string;
  css?: CSS<typeof config>;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement | null;

export const TextInput = forwardRef<Ref, TextInputProps>(
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
      errors,
      tooltip,
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
        <S.Container
          hasError={!!errors && !areErrorsEmpty ? true : false}
          isDisabled={disabled}
          isLoading={loading}
          readOnly={readOnly}
          hasFocus={hasFocus}
        >
          <S.Input
            ref={ref}
            id={name}
            aria-invalid={!!errors && !areErrorsEmpty ? 'true' : 'false'}
            aria-describedby={!errors && !areErrorsEmpty && errors.message}
            placeholder={placeholder}
            hasPlaceholder={!!placeholder}
            hasFocus={hasFocus}
            hasError={!!errors && !areErrorsEmpty ? true : false}
            name={name}
            defaultValue={defaultValue}
            {...props}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled || loading}
            readOnly={readOnly}
            hasValue={hasValue}
            hasIcon={!!icon}
          />

          <S.Label
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

            {!!tooltip && areErrorsEmpty && (
              <InfoButton
                content={tooltip}
                size="sm"
                css={{
                  position: 'absolute',
                  top: 1,
                  right: '$1',
                  opacity: 0.6,
                }}
              />
            )}
          </S.Label>
        </S.Container>

        {!!errors && !areErrorsEmpty ? (
          <FormError message={errors.message} />
        ) : null}
      </Flex>
    );
  }
);
