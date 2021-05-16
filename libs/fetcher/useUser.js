import axios from "axios"

const getUser = (url, token) => {
  if (url, token) {
    return axios({
      url: url,
      headers: {
        'user-token': `Bearer ${token}`
      },
      method: 'GET'
    }).then(res => {
      return res.data.data
    }).catch(err => {
      return err.response
    })
  }
}

const updateUser = (url, token, data) => {
  console.log(url, token, data)
  if (url, token) {
    return axios({
      url: url,
      headers: {
        'user-token': `Bearer ${token}`
      },
      method: 'PATCH',
      data: data
    }).then(res => {
      return res.data.data
    }).catch(err => {
      return err.response
    })
  }
}

export { getUser, updateUser }