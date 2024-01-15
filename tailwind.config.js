/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    letterSpacing: {
      normal: 0,
      wider: '0.15em',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      lato: ['var(--font-lato)'],
    },
    colors: {
      green: '#9EBE53',
      white: '#FFFFFF',
      yellow: '#EBE772',
      blue: '#1B1947',
      black: '#000000',
      darkGreen: '#485921',
      textBlack: '#292929',
      darkGrey: '#A8A8A8',
      red: '#FF0000',
    },
    screens: {
      xs: '400px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
