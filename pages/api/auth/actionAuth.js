import axios from "axios"
import { fetcherLogin } from "../../../libs/fetcher/fetcher"

export const actionAuth = {
  authLogin: (data) => {
    fetcherLogin({
      data: data,
      url: `${process.env.api_url}/auth/login`
    })
  },
  authRegister: (data) => {
    axios({
      url: `${process.env.api_url}/auth/register`,
      data: data,
      method: 'POST',
    }).then(res => {
      actionAuth.authLogin(data)
    }).catch(err => {
      return;
    })
  },

  authLogout: () => {
    withSession(async (req, res) => {
      req.session.destroy();
      res.json({ isLoggedIn: false });
    }, {
      cookieName: "user-session",
      cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true : false
      },
      password: '9bnNkD5TVbY7Tkw2tywteyureyrqasud8ay8'
    })
  }
}