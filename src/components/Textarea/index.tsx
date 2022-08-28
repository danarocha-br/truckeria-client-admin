import * as React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Textarea as TruckeriaTextarea } from 'components/TextareaBase';
import { iconPath } from 'components/Icon';

export type TextareaProps<TFormValues> = {
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
} & Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'name'> &
  Omit<UseControllerProps<TFormValues>, 'control'>;
export const Textarea = <TFormValues extends Record<string, any>>({
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
}: TextareaProps<TFormValues>) => {
  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({
    name,
    control,
    defaultValue,
  });

  return (
    <TruckeriaTextarea
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
      errors={!!errors}
      defaultValue={defaultValue}
      tooltip={tooltip}
    />
  );
};
