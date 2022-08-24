/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '345px',
      xsl: '430px',
      // Intermediary
      sm: '576px',
      md: '672px',
      
      lg: '992px',
      xl: '1170px',
    },

  },
  plugins: [],
}
