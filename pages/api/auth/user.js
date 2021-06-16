import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    // console.log(req.body)
    const user = await req.session.get("user");

    if (user) {
      // in a real world application you might read the user id from the session and then do a database request
      // to get more information on the user if needed
      return res.send({ user });
    } else {
      return res.send(null);
    }
  },
  {
    cookieName: "user-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: '9bnNkD5TVbY7Tkw2tywteyureyrqasud8ay8'
  }
);