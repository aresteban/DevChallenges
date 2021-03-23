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
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
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
