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
        'input-border': 'border, padding, width',
        'width': 'width'
      },
      transitionDuration: {
        '400': '400ms'
      },
      // keyframes: {
      //   hide:  {
      //     '0%': { opacity: '100' },
      //     '100%': { opacity: '0', display: 'none !important' },
      //   }
      // },
      // animation: {
      //   hide: 'hide 1s ease-in 1s 1 forwards'
      // }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
