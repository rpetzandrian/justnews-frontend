import axios from "axios";
import router from "next/router";
// import router from "next/router";

const globalGet = (args) => axios({ ...args, method: 'GET' })
  .then(res => { return res.data.data })
  .catch(err => {
    let error = new Error('err when get data')
    error.info = err.response
    // Attach extra info to the error object.
    throw error
  }),
  globalPost = (args) => axios({ ...args, method: 'POST' }).then(res => { return res.data }).catch(err => { return err.response }),
  globalPatch = (args) => axios({ ...args, method: 'PATCH' }).then(res => { console.log(res); return res.data }).catch(err => { return err.response }),
  globalDelete = (args) => axios({ ...args, method: 'DELETE' }).then(res => { return res.data }).catch(err => { return err.response }),
  fetcherLogin = (args) => axios({ ...args, method: 'POST' })
    .then(async (res) => {
      // localStorage.setItem('id', res.data.data.id)
      // localStorage.setItem('token', res.data.data.token)
      // localStorage.setItem('role', res.data.data.role)
      const response = await fetch('api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(res.data.data)
      })
      response.status === 200 ? router.replace('/') : null
    }).catch(() => {
      return;
    });

export { globalGet, globalPost, globalPatch, globalDelete, fetcherLogin }