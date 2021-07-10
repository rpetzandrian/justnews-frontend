import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css'
import { useAuth } from './api';

function MyApp({ Component, pageProps }) {
  const { auth } = useAuth()
  // console.log(auth, '_______apppp')
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

  useEffect(() => {
    if (window.PusherPushNotifications) {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: "13adc372-e2ea-4d40-809b-cdf471336d3e",
      });

      const tokenProvider = new PusherPushNotifications.TokenProvider({
        url: `${process.env.api_url}/pusher/generate-token`,
        queryParams: {
          user_id: auth?.data?.id, // URL query params your auth endpoint needs
        },
        headers: {
          "user-token": `Bearer ${auth?.data?.token}`, // Headers your auth endpoint needs
        },
      });
      // console.log(tokenProvider, '___TOKENNNNN')

      beamsClient
        .start()
        .then((beams) => beams.getDeviceId())
        .then((deviceId) =>
          console.log("Successfully registered with Beams. Device ID:", deviceId)
        )
        .then(() => beamsClient.addDeviceInterest("justnews"))
        .then(() => beamsClient.getDeviceInterests())
        .then((interests) => console.log("Current interests:", interests))
        .catch(console.error);

      beamsClient
        .start()
        .then(() => beamsClient.setUserId(`${auth?.data?.id}`, tokenProvider))
        .catch(console.error);

      beamsClient
        .getUserId()
        .then((userId) => {
          console.log(userId, 'USERRRRRRRRRRRRRR')
        })
        .catch(console.error);
    }
  }, [auth])

  return (
    // <SWRConfig value={{ refreshInterval: 1000, fetcher: fetch }}>
    <Component {...pageProps} />
    // </SWRConfig >
  )

}

export default MyApp;
