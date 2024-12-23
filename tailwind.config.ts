import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        background2: 'var(--background-2)',
        background3: 'var(--background-3)',
        accent: 'var(--accent)',
        accent2: 'var(--accent-2)',
      },
      fontFamily: {
        ok: 'var(--font-press-start-2p)',
      },
    },
    important: true,
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
