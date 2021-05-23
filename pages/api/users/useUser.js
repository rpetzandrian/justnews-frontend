import useSWR from "swr"
import { globalGet } from "../../../libs/fetcher/fetcher"

export const useUser = (userId, token, initialData) => {
  const getUser = () =>
    globalGet({
      url: `${process.env.api_url}/users/${userId}`,
      headers: {
        'user-token': `Bearer ${token}`
      }
    })

  const { data, mutate, error } = useSWR(userId ? 'get_user' : null, getUser, initialData)
  const loadingUser = !error && !data

  return {
    user: data,
    mutateUser: mutate,
    loadingUser,
    errorUser: error
  }
}