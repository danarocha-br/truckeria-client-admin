import React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
} from 'react-hook-form';

import { RadioGroupBaseProps, RadioGroupBase } from '../RadioGroupBase';

export type RadioGroupProps<TFormValues> = {
  name: Path<TFormValues>;
  defaultValue?: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>;
  control?: any;
} & Omit<RadioGroupBaseProps, 'value'> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const RadioGroup = <TFormValues extends Record<string, any>>({
  name,
  icon,
  defaultValue,
  control,
  tooltip,
  ...props
}: RadioGroupProps<TFormValues>) => {
  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({
    name,
    control,
    defaultValue,
  });

  return (
    <RadioGroupBase
      {...props}
      name={field.name}
      ref={field.ref}
      value={field.value}
      onChange={field.onChange}
      icon={icon}
      errors={errors}
      defaultValue={defaultValue}
      tooltip={tooltip}
    />
  );
};
