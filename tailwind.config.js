/** @type {import('tailwindcss').Config} */
export default {
  content: [
      'index.html',
      'src/**/*.{html,css,js}',
  ],
  theme: {
      fontFamily: {
          'sans': ['Raleway', 'Arial', 'sans-serif'],
          'mono': ['Menlo'],
      },
    extend: {},
  },
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms')
  ],
}

