import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layouts/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      blue: {
        500: 'var(--color-blue-500)',
        800: 'var(--color-blue-800)',
      },
      gray: {
        25: 'var(--color-gray-25)',
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      lime: {
        50: 'var(--color-lime-50)',
        300: 'var(--color-lime-300)',
        400: 'var(--color-lime-400)',
        500: 'var(--color-lime-500)',
        700: 'var(--color-lime-700)',
        900: 'var(--color-lime-900)',
      },
      red: {
        50: 'var(--color-red-50)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
      },
    },
    extend: {
      fontFamily: {
        primary: [
          'Tiempos Text',
          'Times New Roman',
          'Times',
          'serif',
        ],
        secondary: [
          'Apercu',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        sm: '0.7937rem',
      },
    },
  },
} satisfies Config
