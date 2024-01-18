/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
};
