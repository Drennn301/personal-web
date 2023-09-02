/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [`./public/**/*.{html,js}`],
  theme: {
    extend: {


      // To add some Spacing
      spacing : {
        13: `3.25rem`,
        21: `4.15rem`,
      },


      // To add some font from google or etc
      fontFamily :{
        outfit : [`Outfit`],
        ptSans :[`PT Sans`],
        roboto : [`Roboto`],
        heebo : [`Heebo`],
      },

      // To add some Custom Colors
      colors : {
        myRed150:`#ff0000`,
        myRed100:`#E3242B`,
        myRed200:`#D0312D`,
        myRed300:`#D21404`,
        myRed400:`#bf0202`,
        crimson100:`#B90E0A`,
        crimson200:`#A91B0D`,
        crimson300:`#900603`,
        crimson400:`#990f02`,
        crimson500:`#900d09`,
        crimson600:`#60100b`,
        crimson700:`#710c04`,
        crimson800:`rgb(42 15 15)`,
      },
    },
  },
  plugins: [],
}