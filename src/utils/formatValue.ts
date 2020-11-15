const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumSignificantDigits: 2,
  }).format(value);

export default formatValue;
