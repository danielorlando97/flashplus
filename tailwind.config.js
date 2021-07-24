const colors = require('tailwindcss/colors')

module.exports = {
  purge: [ "./pages/*.js",
           "./pages/*.tsx",
           "./app/pages/**/*.tsx",

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: colors.orange,
      red: colors.red,
      gray: colors.coolGray
    },

    boxShadow:{
      topbar: '2px 11px 1px 5px  rgba(245, 158, 11, 0.55)' 
    },
    extend: {
      spacing:{
        '18':'4.3rem'
      },
      colors:{
        back: "#0f0f10",
        orange: '#d46b1f',
        oranged: '#eb984e',
        orangedark: '#d2691e',
        body: '#070707'
      }
    },
  },
  variants: {
    extend: {},
    borderRadius : ["hover"],
    borderWidth : ["hover"]
  },
  plugins: [],
}

