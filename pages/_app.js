import '../styles/globals.css'
import '../styles/tailwind.css'
import {AppContextProvider} from "../global_context/app.global.context"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return ( 
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
       <Component {...pageProps} />
      </AppContextProvider>
    </QueryClientProvider>
    
  )
}



export default MyApp
