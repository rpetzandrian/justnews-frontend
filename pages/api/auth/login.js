import { withIronSession } from 'next-iron-session'
import axios from 'axios'

export default withIronSession(
  async (req, res) => {
    console.log(req.body)
    req.session.set("user", req.body)
    await req.session.save()
    return res.status(200).send("");
  },
  {
    cookieName: "user-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: '9bnNkD5TVbY7Tkw2tywteyureyrqasud8ay8'
  }
);