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
        primary: 'var(--primary)',
        highlight: 'var(--highlight)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        ok: 'var(--font-press-start-2p)',
      },
    },
    important: true,
  },
} satisfies Config;
