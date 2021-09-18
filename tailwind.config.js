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
