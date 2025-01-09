import { text } from 'stream/consumers';
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
        okbg: 'var(--ok-bg)',
        okbg2: 'var(--ok-bg2)',
        okbg3: 'var(--ok-bg3)',
        okfg: 'var(--ok-fg)',
        oka: 'var(--ok-accent)',
        oktext: 'var(--ok-text)',
        oktext2: 'var(--ok-text2)',
      },
      fontFamily: {
        ok: 'var(--font-press-start-2p)',
      },
    },
    important: true,
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
