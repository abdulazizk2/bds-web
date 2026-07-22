import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eafcff',
          100: '#cff7ff',
          200: '#a3edff',
          300: '#63dfff',
          400: '#1fcaff',
          500: '#00aeff',
          600: '#0086ff',
          700: '#0066f0',
          800: '#0050c2',
          900: '#00389c',
          950: '#001f66',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 134, 255, 0.08)',
        'card-hover': '0 8px 28px rgba(0, 134, 255, 0.22)',
        glow: '0 0 24px rgba(0, 174, 255, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
