import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    // <SWRConfig value={{ refreshInterval: 1000, fetcher: fetch }}>
    <Component {...pageProps} />
    // </SWRConfig >
  )

}

export default MyApp;
