import axios from "axios";
import { withIronSession } from "next-iron-session";
import useSWR from "swr";

export const useAuth = () => {
  // const getUser = () => {
  //   if (localStorage.getItem('token')) {
  //     // authorized
  //     return {
  //       data: {
  //         id: localStorage.getItem('id'),
  //         token: localStorage.getItem('token'),
  //         role: localStorage.getItem('role'),
  //       }
  //     };
  //   }

  //   // not authorized
  //   const error = new Error("Not authorized!");
  //   error.status = 403;
  //   throw error;
  // }

  const getUser = () => {
    return axios({
      url: '../api/auth/user',
      method: 'GET',
      headers: { 'Content-Type': 'aplication/json' }
    }).then(res => {
      if (!res.data.user) {
        const data = { loggedOut: true }
        return data
      }
      return {
        data: res.data.user
      }
    }).catch(err => {
      return err
    })
  }

  const { data: auth, mutate: mutateAuth, error: errorAuth } = useSWR('auth_login', getUser);
  const loadingAuth = !auth && !errorAuth;
  const loggedOut = auth?.loggedOut

  return {
    loadingAuth,
    loggedOut,
    auth,
    mutateAuth,
  };
}