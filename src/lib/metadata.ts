export function getAlternates(path: string, locale: string) {
  const baseUrl = 'https://digitaldavid.io';
  return {
    canonical: locale === 'de' ? `${baseUrl}${path}` : `${baseUrl}/en${path}`,
    languages: {
      'de': `${baseUrl}${path}`,
      'en': `${baseUrl}/en${path}`,
    },
  };
}
