module.exports = {
  purge: [ "./pages/*.js",
           "./components/**/**/*.jsx",
           "./components/**/**/*.js",
           "./components/**/*.jsx",
           "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
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
        oranged: '#d36a1e',
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

