import * as React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import {
  NumberInput as TruckeriaNumberInput,
  NumberInputProps as TruckeriaNumberInputProps,
} from '../NumberInputBase';
import { iconPath } from '../Icon';

export type NumberInputProps<TFormValues> = {
  name: Path<TFormValues>;
  label: string;
  placeholder?: string;
  icon?: keyof typeof iconPath;
  defaultValue?: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>;
  control?: any;
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  tooltip?: string;
} & Omit<UseControllerProps<TFormValues>, 'control'> &
  TruckeriaNumberInputProps;

export const NumberInput = <TFormValues extends Record<string, any>>({
  name,
  icon,
  defaultValue,
  label,
  placeholder,
  disabled = false,
  loading = false,
  readOnly = false,
  control,
  tooltip,
  ...props
}: NumberInputProps<TFormValues>) => {
  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({
    name,
    control,
    defaultValue,
  });

  return (
    <TruckeriaNumberInput
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
      tooltip={tooltip}
    />
  );
};
