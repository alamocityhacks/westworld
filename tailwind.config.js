module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'rubik-mono': ['Rubik Mono One', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'filesvg': '80px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
