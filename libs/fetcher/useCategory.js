import axios from "axios"

const getCategory = (url) => {
  return axios({
    url: url,
    method: 'GET',
  }).then(res => {
    return res.data.data
  }).catch(err => {
    return err.response
  })
}

export { getCategory }