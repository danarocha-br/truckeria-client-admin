import * as yup from 'yup';

import { ERROR_MESSAGES } from 'constants/index';

export const schema = yup.object().shape({
  image_url: yup.string(),
  name: yup
    .string()
    .min(3, ERROR_MESSAGES.VALIDATION.NAME.MIN)
    .required(ERROR_MESSAGES.VALIDATION.NAME.REQUIRED),
  internal_name: yup.string().min(3, ERROR_MESSAGES.VALIDATION.NAME.MIN),
  description: yup.string(),
  product_type: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required(),
  product_unity: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required(),
  cost_price: yup.number().required(),
  price: yup.number().required(),
  margin_price: yup.number().required(),
  default_quantity: yup.number().required(),
  max_quantity: yup.number(),
  tags: yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
  }),
  badges: yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
  }),
  barcode: yup.number(),
  internal_barcode: yup.number(),
  item_stock_quantity: yup.number(),
  direct_sale: yup.bool(),
  display_featured: yup.bool(),
  display_featured: yup.bool(),
});
