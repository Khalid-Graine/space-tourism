/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        right: '6px 0px 5px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Barlow', 'sans'],
        belle: ['Bellefair', 'sans'],
        condensed: ['Barlow Condensed', 'sans'],
      },
      colors: {
        galaxy: '#fefefe20',
        gray: '#D0D6F9',
      },
    },
  },
  plugins: [],
};
