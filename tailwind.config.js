module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '80rem',
      },
      // Custom font family
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-alabaster': '#fcfcfc',
        'clr-minsk': '#3b2e83',
        'clr-eminence': '#673b75',
        'clr-vin-rouge': '#944868',
        'clr-fuzzy-wuzzy-brown': '#c1565b',
        'clr-shark': '#2E2F35',
        minsk: {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c7ccfe',
          300: '#a4aafd',
          400: '#8380f9',
          500: '#7062f2',
          600: '#6145e6',
          700: '#5337cb',
          800: '#442fa4',
          900: '#3b2e83',
          950: '#241b4b',
        },
        eminence: {
          50: '#faf7fc',
          100: '#f5eef9',
          200: '#eadcf2',
          300: '#dbc0e7',
          400: '#c59bd7',
          500: '#ab73c2',
          600: '#8f54a5',
          700: '#774388',
          800: '#673b75',
          900: '#54325d',
          950: '#32183a',
        },
      },
      boxShadow: {
        btn: '3px 3px 0px 0px rgba(46, 47, 53, 1)',
      },
    },
  },
  plugins: [],
};
