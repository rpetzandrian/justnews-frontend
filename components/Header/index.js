import Head from 'next/head'

const Header = props => {
  return (
    <Head>
      <title>JustNews</title>

      <script src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
        const beamsClient = new PusherPushNotifications.Client({
          instanceId: "13adc372-e2ea-4d40-809b-cdf471336d3e",
          });

        beamsClient
        .start()
            .then((beamsClient) => beamsClient.getDeviceId())
            .then((deviceId) =>
        console.log("Successfully registered with Beams. Device ID:", deviceId)
        )
            .then(() => beamsClient.addDeviceInterest("hello"))
            .then(() => beamsClient.getDeviceInterests())
            .then((interests) => console.log("Current interests:", interests))
        .catch(console.error);
      ` }} />
      {/* <link rel="icon" href={`${props.url}`} /> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script> */}
    </Head>
  )
}

export default Header
