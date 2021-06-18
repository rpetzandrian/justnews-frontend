import axios from "axios";

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
    .then(res => {
      // localStorage.setItem('id', res.data.data.id)
      // localStorage.setItem('token', res.data.data.token)
      // localStorage.setItem('role', res.data.data.role)
      fetch('api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(res.data.data)
      })
    }).catch(() => {
      return;
    });

export { globalGet, globalPost, globalPatch, globalDelete, fetcherLogin }