import { InputHTMLAttributes, useCallback, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import {
  components,
  DropdownIndicatorProps,
  ClearIndicatorProps,
} from 'react-select';
import { AiOutlineLoading3Quarters, AiFillCaretDown } from 'react-icons/ai';
import { HiExclamationCircle, HiX } from 'react-icons/hi';

import * as S from './styles';
import { Error, Label } from 'components/TextInput/styles';
import tokens from '../../../tailwind.config';

type OptionType = {
  value: string | number;
  label: string;
};

export type SelectProps = {
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  options: OptionType[];
} & InputHTMLAttributes<HTMLSelectElement>;

const Select = ({
  name,
  id,
  label,
  options,
  disabled = false,
  loading = false,
  isMulti = false,
  isClearable = false,
  defaultValue,
  ...rest
}: SelectProps) => {
  const { control, getValues } = useFormContext();

  const {
    field: { ref, onChange, ...inputProps },
    formState: { dirtyFields, errors },
  } = useController({
    name,
    control,
    defaultValue,
  });

  /**
   * Get UI States
   */
  const [isFocused, setFocus] = useState(!!dirtyFields[name]);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    // if (!watchedInput || watchedInput.length > 0) {
    setFocus(false);
  }, []);

  /** Custom components */
  const DropdownIndicator = (props: DropdownIndicatorProps) => (
    <components.DropdownIndicator {...props}>
      <AiFillCaretDown size={14} className="c-select__dropdown-icon" />
    </components.DropdownIndicator>
  );

  const ClearIndicator = (props: ClearIndicatorProps) => {
    const {
      innerProps: { ref, ...restInnerProps },
      children = <HiX className="c-select__clear-icon" />,
    } = props;
    return (
      <div {...restInnerProps} ref={ref} style={{ padding: '0px 5px' }}>
        {children}
      </div>
    );
  };

  // const NoOptionsMessage = (props) => (
  //   <components.NoOptionsMessage {...props} />
  // );

  return (
    <>
      <div className="flex flex-col w-full rounded-sm">
        <S.Container
          isFocused={isFocused}
          hasError={errors[name] ? true : false}
          isDisabled={disabled || loading}
          isLoading={Number(loading)}
          hasValue={isMulti ? getValues(name)?.length : !!dirtyFields[name]}
        >
          <S.CustomSelect
            {...inputProps}
            {...rest}
            inputRef={ref}
            name={name}
            id={id}
            placeholder=""
            instanceId={id}
            classNamePrefix="c-select"
            options={options}
            isFocused={isFocused}
            hasError={errors[name] ? true : false}
            hasValue={!!dirtyFields[name] || !!defaultValue}
            isDisabled={disabled || loading}
            // value={value}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: KeyboardEvent | EventTarget | any) => {
              onChange(e);
            }}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            isClearable={isClearable}
            isMulti={isMulti}
            components={{
              DropdownIndicator,
              ClearIndicator,
            }}
          />
          <Label
            aria-labelledby={label}
            htmlFor={id}
            hasError={errors[name] ? true : false}
            style={{
              zIndex: -1,
            }}
          >
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
          </Label>
        </S.Container>

        {errors[name] ? (
          <Error role="alert">{errors[name].message}</Error>
        ) : null}
      </div>
    </>
  );
};

export default Select;
