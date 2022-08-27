import React from 'react';
import {
  Path,
  PathValue,
  UnpackNestedValue,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { SwitchBase as TruckeriaSwitch } from '../SwitchBase';

export type SwitchProps<TFormValues> = {
  label: string;
  name: Path<TFormValues>;
  defaultValue?: UnpackNestedValue<PathValue<TFormValues, Path<TFormValues>>>;
  disabled?: boolean;
  control?: any;
  tooltip?: string;
  errors?: any | undefined;
} & Omit<UseControllerProps<TFormValues>, 'control'>;

export const Switch = <TFormValues extends Record<string, any>>({
  name,
  defaultValue,
  control,
  tooltip,
  ...props
}: SwitchProps<TFormValues>) => {
  const {
    field,
    formState: { errors },
  } = useController<TFormValues>({
    name,
    control,
    defaultValue,
  });

  return (
    <TruckeriaSwitch
      {...props}
      ref={field.ref}
      name={field.name}
      checked={field.value}
      onCheckedChange={field.onChange}
      errors={errors}
      tooltip={tooltip}
      defaultChecked={defaultValue}
    />
  );
};
