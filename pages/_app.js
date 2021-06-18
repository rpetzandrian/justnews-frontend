import 'bootstrap/dist/css/bootstrap.min.css'
import { SWRConfig } from 'swr';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <SWRConfig value={{ refreshInterval: 1000, fetcher: fetch }}>
    <Component {...pageProps} />
    // </SWRConfig >
  )

}

export default MyApp;
