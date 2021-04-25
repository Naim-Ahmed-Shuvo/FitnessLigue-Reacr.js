
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs1': {'max':'360px'},
        'xs2': {'max':'375px'},
        'xs3': {'max':'414px'},
        'xs4': {'max':'475px'},
        ...defaultTheme.screens,
      },
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
