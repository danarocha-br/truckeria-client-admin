import { InputHTMLAttributes, useCallback, useState, forwardRef } from 'react';
import {
  Control,
  FieldValues,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';
import { IconType } from 'react-icons';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import * as S from './styles';
import tokens from '../../../tailwind.config';

export type TextInputProps = {
  id: string;
  name: string;
  defaultValue?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  icon?: string | JSX.Element | IconType;
  control?: Control<FieldValues>;
} & InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement | null;

const TextInput = forwardRef<Ref, TextInputProps>(
  (
    {
      id,
      name,
      type,
      icon: Icon,
      defaultValue,
      label,
      placeholder,
      disabled = false,
      loading = false,
      readOnly = false,
      ...rest
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    const {
      register,
      control,
      formState: { errors },
    } = useFormContext();

    const watchedInput = useWatch({
      control,
      name: name,
      defaultValue,
    });

    /**
     * Get UI States
     */
    const [isFocused, setFocus] = useState(false);

    const handleInputFocus = useCallback(() => {
      setFocus(true);
    }, [setFocus]);

    const handleInputBlur = useCallback(() => {
      if (!watchedInput || watchedInput.length > 0) {
        setFocus(false);
      }
    }, [setFocus, watchedInput]);

    return (
      <div className="flex flex-col w-full">
        <S.Container
          isFocused={isFocused}
          hasError={errors[name] ? true : false}
          isDisabled={disabled}
          isLoading={Number(loading)}
          readOnly={readOnly}
        >
          <S.Input
            {...rest}
            type={type}
            id={id}
            aria-invalid={errors[name] ? 'true' : 'false'}
            placeholder={placeholder}
            hasPlaceholder={!!placeholder}
            isFocused={isFocused}
            hasError={errors[name] ? true : false}
            {...register(name)}
            name={name}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            hasValue={!!watchedInput && !!watchedInput.length}
            disabled={disabled || loading}
            readOnly={readOnly}
          />

          <S.Label htmlFor={id} hasError={errors[name] ? true : false}>
            {Icon && <Icon className="c-input__icon" aria-hidden="true" />}
            <span>{label}</span>

            {errors[name] ? (
              <HiExclamationCircle
                name="alert"
                size={20}
                color={tokens.theme.colors.red[500]}
                className="c-input__error-icon"
                aria-hidden="true"
              />
            ) : null}

            {loading && (
              <AiOutlineLoading3Quarters
                color="white"
                className="animate-spin absolute top-1 right-2"
                aria-hidden="true"
              />
            )}
          </S.Label>
        </S.Container>

        {errors[name] ? <S.Error>{errors[name].message}</S.Error> : null}
      </div>
    );
  }
);

export default TextInput;
