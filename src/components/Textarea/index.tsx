import {
  TextareaHTMLAttributes,
  useCallback,
  useState,
  forwardRef,
} from 'react';
import {
  Control,
  FieldValues,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import * as S from './styles';
import { Error } from 'components/TextInput/styles';
import tokens from '../../../tailwind.config';

export type TextareaProps = {
  id: string;
  name: string;
  defaultValue?: string;
  className?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  control?: Control<FieldValues>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

type Ref = HTMLTextAreaElement | null;

const Textarea = forwardRef<Ref, TextareaProps>(
  (
    {
      id,
      name,
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
          hasValue={!!watchedInput && !!watchedInput.length}
          hasError={errors[name] ? true : false}
          isDisabled={disabled || loading}
          isLoading={Number(loading)}
          readOnly={readOnly}
        >
          <S.Textarea
            {...rest}
            id={id}
            rows={5}
            aria-invalid={errors[name] ? 'true' : 'false'}
            placeholder={placeholder}
            hasError={errors[name] ? true : false}
            {...register(name)}
            name={name}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled || loading}
          ></S.Textarea>

          <S.Label htmlFor={id} hasError={errors[name] ? true : false}>
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

        {errors[name] ? <Error>{errors[name].message}</Error> : null}
      </div>
    );
  }
);

export default Textarea;
