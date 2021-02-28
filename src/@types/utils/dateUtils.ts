export function isValidDate(date: any) {
  return date instanceof Date && !isNaN(date.getTime());
}
