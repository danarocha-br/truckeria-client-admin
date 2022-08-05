import * as yup from 'yup';

import { ERROR_MESSAGES } from 'constants/index';

export type SetupValues = {
  first_name: string;
  last_name: string;
  cpf: number | '';
  foodtruck_name: string;
  foodtruck_avatar_url: string;
  registered_code?: number | '';
  cuisine_types: string[];
  main_address_street: string;
  main_zipcode: number | '';
  main_address_number: string | number;
  main_address_state: string;
  phone_number?: number;
  location_type: 'fixed' | 'flexible';
  bussiness_hours: {
    days?: string[];
    date_from?: string;
    date_to?: string;
    time_from: string;
    time_to: string;
  }[];
};

export const setupDefaultValues: SetupValues = {
  first_name: '',
  last_name: '',
  cpf: '',
  foodtruck_name: '',
  foodtruck_avatar_url: '',
  registered_code: '',
  cuisine_types: [],
  main_address_street: '',
  main_address_number: '',
  main_address_country: '',
  main_zipcode: '',
  location_type: 'flexible',
  bussiness_hours: [
    {
      days: [],
      date_from: '',
      date_to: '',
      time_from: '',
      time_to: '',
    },
  ],
};

export const firstStepValidationSchema = yup.object({
  first_name: yup
    .string()
    .min(3, ERROR_MESSAGES.VALIDATION.NAME.MIN)
    .required(ERROR_MESSAGES.VALIDATION.NAME.REQUIRED),
  last_name: yup
    .string()
    .email(ERROR_MESSAGES.VALIDATION.EMAIL.MESSAGE)
    .required(ERROR_MESSAGES.VALIDATION.EMAIL.REQUIRED),
  cpf: yup
    .number()
    .min(11, ERROR_MESSAGES.VALIDATION.CPF.MIN)
    .max(11, ERROR_MESSAGES.VALIDATION.CPF.MIN)
    .required(ERROR_MESSAGES.VALIDATION.CPF.REQUIRED),
});

export const secondStepValidationSchema = yup.object({
  foodtruck_name: yup
    .string()
    .min(3, ERROR_MESSAGES.VALIDATION.NAME.MIN)
    .required(ERROR_MESSAGES.VALIDATION.NAME.REQUIRED),
  foodtruck_avatar_url: yup.mixed().nullable().notRequired(),
  registered_code: yup
    .number()
    .min(14, ERROR_MESSAGES.VALIDATION.CNPJ.MIN)
    .max(14, ERROR_MESSAGES.VALIDATION.CNPJ.MIN),
  cuisine_types: yup
    .array()
    .min(1, 'Escolha pelo menos uma categoria.')
    .max(3, 'Escolha no máximo 3 categorias.')
    .required('Escolha pelo menos uma categoria.'),
});

export const thirdStepValidationSchema = yup.object({
  main_address_street: yup
    .string()
    .min(3, ERROR_MESSAGES.VALIDATION.ADDRESS.STREET_NAME.MIN)
    .required(ERROR_MESSAGES.VALIDATION.ADDRESS.STREET_NAME.REQUIRED),
  main_address_number: yup
    .string()
    .min(3, ERROR_MESSAGES.VALIDATION.ADDRESS.STREET_NUMBER.MIN)
    .required(ERROR_MESSAGES.VALIDATION.ADDRESS.STREET_NUMBER.REQUIRED),
  main_address_city: yup
    .string()
    .min(3, ERROR_MESSAGES.VALIDATION.ADDRESS.CITY.MIN)
    .required(ERROR_MESSAGES.VALIDATION.ADDRESS.CITY.REQUIRED),
  main_address_state: yup
    .string()
    .required(ERROR_MESSAGES.VALIDATION.ADDRESS.STATE.REQUIRED),
  main_address_country: yup
    .string()
    .required(ERROR_MESSAGES.VALIDATION.ADDRESS.COUNTRY.REQUIRED),
  main_address_zipcode: yup
    .string()
    .required(ERROR_MESSAGES.VALIDATION.ADDRESS.ZIPCODE.REQUIRED),
});

export const fourthStepValidationSchema = yup.object({
  location_type: yup
    .string()
    .required('O campo tipo de localização é obrigatório.'),
  bussiness_hours: yup.array().required('O campo é obrigatório.'),
});
