/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        right: '6px 0px 5px rgba(0, 0, 0, 0.1)',
      },
      // fontSize: {
      //   'xs': '0.75rem',     // 12px
      //   'sm': '0.875rem',    // 14px
      //   'base': '1rem',      // 16px (default)
      //   'lg': '1.125rem',    // 18px
      //   'xl': '1.25rem',     // 20px
      //   '2xl': '1.5rem',     // 24px
      // },
      fontFamily: {
        sans: ['Barlow', 'sans'],
        belle: ['Bellefair', 'sans' ],
        condensed: ['Barlow Condensed', 'sans'],
      },
      colors: {
        galaxy: '#fefefe20',
        gray: '#D0D6F9',
      }

    },
  },
  plugins: [],
}

