import 'bootstrap/dist/css/bootstrap.min.css'
import { SWRConfig } from 'swr';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ refreshInterval: 1000 }}>
      <Component {...pageProps} />
    </SWRConfig>
  )

}

export default MyApp;
