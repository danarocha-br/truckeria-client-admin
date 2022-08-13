export const formatCurrency = (
  value: number,
  currency = 'BRL',
  withoutDecimal = false,
  decimalPlaces = 2
) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency || '',
    minimumFractionDigits: withoutDecimal ? 0 : decimalPlaces,
    maximumFractionDigits: withoutDecimal ? 0 : decimalPlaces,
  })
    .format(value)
    .replace(/\u00A0/, ' ');
