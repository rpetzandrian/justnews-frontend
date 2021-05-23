import 'bootstrap/dist/css/bootstrap.min.css'
import { SWRConfig } from 'swr';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )

}

export default MyApp;
