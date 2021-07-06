import '../styles/globals.css'
import '../styles/tailwind.css'
import { QueryClient, QueryClientProvider } from "react-query"
import { DependencyProvider } from '../app/hook.features/dependencyContext'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return ( 
    <QueryClientProvider client={queryClient}>
        <DependencyProvider>
          <Component {...pageProps} />
        </DependencyProvider>
    </QueryClientProvider>    
  )
}

export default MyApp
