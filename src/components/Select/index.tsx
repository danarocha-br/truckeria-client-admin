import * as React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  Select as TruckeriaSelect,
  SelectProps as TruckeriaSelectProps,
} from '../SelectBase';
import { iconPath } from '../Icon';

export type SelectProps<TFormValues> = {
  defaultValue?: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>;
  control?: any;
  icon?: keyof typeof iconPath;
  tooltip?: string;
} & TruckeriaSelectProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'name'> &
  Omit<UseControllerProps<TFormValues>, 'control'>;

export const Select = <TFormValues extends Record<string, any>>({
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
  options,
  tooltip,
  ...props
}: SelectProps<TFormValues>) => {
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
      options={options}
      tooltip={tooltip}
    />
  );
};
