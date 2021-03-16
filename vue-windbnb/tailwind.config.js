module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif']
    },
    fontSize: {
      '2xs': '.65rem',
    },

    extend: {
      transitionProperty: {
        'input-border': 'border, padding',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
