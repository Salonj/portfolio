import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fi', 'sv'], // Supported locales
  defaultLocale: 'en',

  pathnames: {
    '/': '/',
    '/blog': '/blog',

    // Localized About route
    '/about': {
      en: '/about',
      fi: '/tietoa',
      sv: '/om-oss',
    },

    // Localized Projects route
    '/projects': {
      en: '/projects',
      fi: '/projektit',
      sv: '/projekt',
    },

    // Localized Contact route
    '/contact': {
      en: '/contact',
      fi: '/yhteystiedot',
      sv: '/kontakt',
    },

    // Example for dynamic routes
    '/posts/[slug]': {
      en: '/posts/[slug]',
      fi: '/artikkelit/[slug]',
      sv: '/inlagg/[slug]',
    },
  },
});
