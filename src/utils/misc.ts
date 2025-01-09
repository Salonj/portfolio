import { DateTimeFormatOptions } from 'next-intl';

// Map or normalize locale strings
export function normalizeLocale(locale: string): string {
  const localeMap: Record<string, string> = {
    en: 'en-US',
    fi: 'fi-FI',
    sv: 'sv-SE',
  };

  return localeMap[locale] || locale; // Return mapped locale or fallback to original
}

// Format date using next-intl
export function formatDate(
  date: string,
  locale: string,
  formatType: 'long' | 'short' = 'long',
  options?: DateTimeFormatOptions
): string {
  const normalizedLocale = normalizeLocale(locale);

  // Set default options based on formatType
  const formatOptions: DateTimeFormatOptions =
    formatType === 'long'
      ? {
          ...options,
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }
      : {
          ...options,
          year: 'numeric',
          month: 'long',
        };

  return new Intl.DateTimeFormat(normalizedLocale, formatOptions).format(
    new Date(date)
  );
}
