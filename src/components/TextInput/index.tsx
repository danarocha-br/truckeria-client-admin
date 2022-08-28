import * as React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { TextInput as TruckeriaTextInput } from 'components/TextInputBase';
import { iconPath } from 'components/Icon';

export type InputProps<TFormValues> = {
  name: Path<TFormValues>;
  label: string;
  type?: 'text' | 'date' | 'email' | 'password' | 'number';
  placeholder?: string | number;
  icon?: keyof typeof iconPath;
  defaultValue?: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>;
  control?: any;
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  tooltip?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> &
  Omit<UseControllerProps<TFormValues>, 'control'>;

export const TextInput = <TFormValues extends Record<string, any>>({
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
}: InputProps<TFormValues>) => {
  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({
    name,
    control,
    defaultValue,
  });

  return (
    <TruckeriaTextInput
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
      hasValue={!!field.value || !!defaultValue}
      errors={!!errors}
      defaultValue={defaultValue}
      tooltip={tooltip}
    />
  );
};
