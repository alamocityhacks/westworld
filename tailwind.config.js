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
      fontSize: {
        '8xl': ['5.5rem', '1'],
      },
      minHeight: {
        '3/4': '75%',
      },
      minWidth: {
        'profile': '10rem',
      },
      maxWidth: {
        'profile-sm': '5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
