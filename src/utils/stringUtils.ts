export const isUrl = (value: string) => {
  return (
    value &&
    value.match(
      /https?:\/\/(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g
    )
  );
};

export async function urlToFile(
  url: string,
  filename: string,
  mimeType: string
) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return new File([buffer], filename, { type: mimeType });
}

type NumberFormatPartTypes =
  | 'compact'
  | 'currency'
  | 'decimal'
  | 'exponentInteger'
  | 'exponentMinusSign'
  | 'exponentSeparator'
  | 'fraction'
  | 'group'
  | 'infinity'
  | 'integer'
  | 'literal'
  | 'minusSign'
  | 'nan'
  | 'plusSign'
  | 'percentSign'
  | 'unit'
  | 'unknown';

export function formatNumberToValue(
  value: number,
  locale?: string,
  currency?: string,
  style?: NumberFormatPartTypes
) {
  return new Intl.NumberFormat(locale ?? 'pt-BR', {
    style: style ?? 'currency',
    currency: currency ?? 'BRL',
  }).format(value);
}
