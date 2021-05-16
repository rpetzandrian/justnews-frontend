import axios from "axios"

const getPost = (url) => {
  return axios({
    url: url,
    method: 'GET',
  }).then(res => {
    return res.data.data
  }).catch(err => {
    return err.response
  })
}

const addPost = (url, data) => {
  if (url) {
    return axios({
      url: url,
      method: 'POST',
      data: data
    }).then(res => {
      return res.data.data
    }).catch(err => {
      return err.response
    })
  }
}

const likeOrUnlike = (url, method) => {
  if (url) {
    return axios({
      url: url,
      method: method,
    }).then(res => {
      return res.data.data
    }).catch(err => {
      return err.response
    })
  }
}

export { getPost, addPost, likeOrUnlike }