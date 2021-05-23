import axios from "axios";

const globalGet = (args) => axios({ ...args, method: 'GET' })
  .then(res => { return res.data.data })
  .catch(err => {

    // Attach extra info to the error object.
    throw err.response.data
  }),
  globalPost = (args) => axios({ ...args, method: 'POST' }).then(res => { return res.data }).catch(err => { return err.response }),
  globalPatch = (args) => axios({ ...args, method: 'PATCH' }).then(res => { console.log(res); return res.data }).catch(err => { return err.response }),
  globalDelete = (args) => axios({ ...args, method: 'DELETE' }).then(res => { return res.data }).catch(err => { return err.response }),
  fetcherLogin = (args) => axios({ ...args, method: 'POST' })
    .then(res => {
      localStorage.setItem('id', res.data.data.id)
      localStorage.setItem('token', res.data.data.token)
      localStorage.setItem('role', res.data.data.role)
    }).catch(() => {
      return;
    });

export { globalGet, globalPost, globalPatch, globalDelete, fetcherLogin }