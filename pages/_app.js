import '../styles/globals.css'
import '../styles/tailwind.css'
import {AppContextProvider} from "../global_context/app.global.context"

function MyApp({ Component, pageProps }) {
  return ( 
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
