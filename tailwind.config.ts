import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#006B5A',
          50: '#e6f2f0',
          100: '#cce5e1',
          200: '#99cbc3',
          300: '#66b1a5',
          400: '#339787',
          500: '#006B5A',
          600: '#005648',
          700: '#004036',
          800: '#002b24',
          900: '#001512',
        },
        primary: {
          DEFAULT: '#006B5A',
          foreground: '#ffffff',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: '#006B5A',
            foreground: '#ffffff',
          },
          focus: '#006B5A',
        },
      },
    },
  })],
};

export default config;

