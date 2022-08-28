import React, { useCallback, useState, forwardRef } from 'react';
import { CSS } from '@stitches/react';

import { Flex } from '../Flex';
import { iconPath, Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { FormError } from '../FormError';
import { InfoButton } from '../InfoButton';
import { Box } from '../Box';
import * as S from './styles';

import { config } from '../../../stitches.config';

export type TextareaProps = {
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
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

type Ref = HTMLInputElement | null;

export const Textarea = forwardRef<Ref, TextareaProps>(
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
      errors,
      tooltip,
      ...props
    },
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
          <S.Textarea
            ref={ref}
            id={name}
            aria-invalid={!!errors && !areErrorsEmpty ? 'true' : 'false'}
            aria-describedby={!errors && !areErrorsEmpty && errors.message}
            placeholder={placeholder}
            name={name}
            defaultValue={defaultValue}
            {...props}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled || loading ? true : false}
            readOnly={readOnly}
            hasIcon={!!icon}
            rows={8}
          />

          <S.Label
            aria-labelledby={label}
            htmlFor={name}
            isDisabled={disabled || loading}
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

            {loading && areErrorsEmpty && (
              <Box css={{ position: 'absolute', right: '$2', top: '$1' }}>
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
