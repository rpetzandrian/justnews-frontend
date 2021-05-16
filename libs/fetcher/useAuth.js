import axios from "axios"

const useLogin = (formData) => {
  return axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    data: formData,
    method: 'POST',
  }).then(res => {
    localStorage.setItem('id', res.data.data.id)
    localStorage.setItem('token', res.data.data.token)
    localStorage.setItem('role', res.data.data.role)
  }).catch(err => {
    return;
  })
}

const useSignup = (formData) => {
  return axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    data: formData,
    method: 'POST',
  }).then(res => {
    useLogin(formData)
  }).catch(err => {
    return;
  })
}

export { useLogin, useSignup }

