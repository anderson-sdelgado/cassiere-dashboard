export function pricePercentageFormatter(number) {
  number = number.replace(/\D/g, '');
  number = (number / 100).toFixed(2) + '';
  number = number.replace('.', ',');
  number = number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return number;
}

export function numberFormatter(number) {
  number = number.replace(/\D/g, '');
  return number;
}
