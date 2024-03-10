/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // add this section
  purge: ['./src/**/*.html', './src/**/*.svelte'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};
