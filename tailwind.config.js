const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/components/modules/**/*.{js,ts,jsx,tsx}',
      './src/components/elements/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['dark'], //specific classes
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: 'var(--color-back-primary)',
    }),
    textColor: (theme) => ({
      primary: 'var(--color-fore-primary)',
      secondary: 'var(--color-fore-secondary)',
      accent: 'var(--color-fore-accent)',
    }),
    gradientColorStops: () => ({
      primary: 'var(--color-gradient-accent1)',
      secondary: 'var(--color-gradient-accent2)',
    }),
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: fontFamily.mono,
    },
    backgroundSize: {
      200: '150%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
