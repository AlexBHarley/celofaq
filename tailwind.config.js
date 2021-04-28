module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'EB Garamond',
              fontWeight: 400,
            },
            h2: {
              fontFamily: 'EB Garamond',
              fontWeight: 400,
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            h3: {
              fontFamily: 'Jost',
              fontWeight: 400,
            },
            h4: {
              fontFamily: 'EB Garamond',
              fontWeight: 400,
            },
            h5: {
              fontFamily: 'Jost',
              fontWeith: 500,
            },
            h6: {
              fontFamily: 'Jost',
              fontWeith: 500,
            },
            p: {
              fontFamily: 'EB Garamond',
              fontWeight: 400,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
