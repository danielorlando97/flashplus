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
      colors:{
        back: "#1a1a1a",
        orange: '#d2691e',
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

