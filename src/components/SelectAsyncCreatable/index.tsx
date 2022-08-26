import * as React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  SelectAsyncCreatable as TruckeriaSelect,
  SelectAsyncCreatableProps as TruckeriaSelectProps,
} from '../SelectAsyncCreatableBase';
import { iconPath } from '../Icon';

export type SelectAsyncProps<TFormValues> = {
  defaultValue?: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>;
  control?: any;
  defaultOptions?: string[];
  icon?: keyof typeof iconPath;
  tooltip?: string;
} & TruckeriaSelectProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'name'> &
  Omit<UseControllerProps<TFormValues>, 'control'>;

export const SelectAsyncCreatable = <TFormValues extends Record<string, any>>({
  name,
  icon,
  defaultValue,
  label,
  placeholder,
  disabled = false,
  loading = false,
  readOnly = false,
  control,
  isMulti,
  isClearable,
  defaultOptions,
  tooltip,
  ...props
}: SelectAsyncProps<TFormValues>) => {
  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({
    name,
    control,
    defaultValue,
  });

  return (
    <TruckeriaSelect
      {...props}
      ref={field.ref}
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      label={label}
      icon={icon}
      placeholder={placeholder}
      disabled={disabled}
      loading={loading}
      readOnly={readOnly}
      hasValue={!!field.value}
      errors={!!errors}
      isMulti={isMulti}
      isClearable={isClearable}
      defaultOptions={defaultOptions}
      tooltip={tooltip}
    />
  );
};
