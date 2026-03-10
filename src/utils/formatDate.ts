/**
 * Convert a date string (ISO) to Brazilian date format (DD/MM/AAAA).
 * @param isoDate - String in the format "YYYY-MM-DDTHH:mm:ss"
 * @returns Formatted date string "DD/MM/AAAA"
 */
export const formatDateToBrazilianDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};