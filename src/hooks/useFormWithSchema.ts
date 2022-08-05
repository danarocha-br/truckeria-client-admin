import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';

/**
 * @param schema
 * @param useFormProps
 * @returns
 */

export function useFormWithSchema<T extends Yup.AnyObjectSchema>(
  schema: T,
  useFormProps?: UseFormProps<Yup.Asserts<T>>
): UseFormReturn<Yup.Asserts<T>> {
  return useForm({ ...useFormProps, resolver: yupResolver(schema) });
}

/**
 * Use this to prevent importing yup library in your components, if you don't already have the schema, and if you want to have a dynamic schema values.
 * This is rebuild on each render.
 *
 * If you have already the schema or use a static schema, consider useFormWithSchema()
 *
 * @param schemaBuilder - Should return a validation schema
 * @param useFormProps Do not provide "resolver" value as it will be ignored.
 * @returns
 */

export function useFormWithSchemaBuilder<T extends Yup.AnyObjectSchema>(
  // eslint-disable-next-line no-unused-vars
  schemaBuilder: (yup: typeof Yup) => T,
  useFormProps?: UseFormProps<Yup.Asserts<T>>
): UseFormReturn<Yup.Asserts<T>> {
  return useForm({
    ...useFormProps,
    resolver: yupResolver(schemaBuilder(Yup)),
  });
}
