import { withIronSession } from 'next-iron-session'
import axios from 'axios'

export default withIronSession(
  async (req, res) => {
    req.session.destroy();
    res.json({ isLoggedIn: false });
  },
  {
    cookieName: "user-session",
    cookieOptions: {
      secure: false
    },
    password: '9bnNkD5TVbY7Tkw2tywteyureyrqasud8ay8'
  }
);